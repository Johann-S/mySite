<?php
/**
 * @author: Johann-S
 * @email: johann.servoire@gmail.com
 */

namespace Site\MainBundle\Utils;


class GithubUtil {
    private $buzz;
    public function __construct($_buzz) {
        $this->buzz = $_buzz;
    }

    public function getProfilInformation() {
        $response = $this->buzz->get('https://api.github.com/users/johann-s',array(
            'User-Agent: Johann-S'
        ));
        $dataResponse = json_decode($response->getContent(),true);
        return $dataResponse;
    }

    public function getContributedRepository() {
        $content = file_get_contents('https://github.com/Johann-S');
        $dom = new \DOMDocument();
        if (!@$dom->loadHTML($content)) {
            throw new \Exception('Unable to load the page');
        }

        $tabUl = $dom->getElementsByTagName('ul');
        $tabUListRepo = array();
        foreach ($tabUl as $ul) {
            $class = $ul->attributes->getNamedItem('class')->nodeValue;
            if ($class === 'boxed-group-inner mini-repo-list') {
                $tabUListRepo[] = $ul;
            }
        }

        $nbTabUl = count($tabUListRepo);
        if ($nbTabUl === 0) {
            throw new \Exception('List of repository not found');
        }

        if ($nbTabUl === 2) {
            unset($tabUListRepo[0]);
            $tabUListRepo[0] = $tabUListRepo[1];
        }

        $uListRepo = $tabUListRepo[0];
        $tabLi = $uListRepo->getElementsByTagName('li');
        $tabRepo = array();
        foreach ($tabLi as $li) {
            $info = $this->getRepoByLi($li);
            $tabRepo[] = $info;
        }
        return $tabRepo;
    }

    private function getRepoByLi(\DOMNode $li) {
        $tabLink = $li->getElementsByTagName('a');
        if ($tabLink->length !== 1) {
            throw new \Exception('No link');
        }
        $link = $tabLink->item(0);
        $tabSpan = $link->getElementsByTagName('span');
        $owner = '';
        $repoName = '';
        $nbStars = '';
        foreach ($tabSpan as $span) {
            $class = $span->attributes->getNamedItem('class')->nodeValue;
            if ($class === 'owner css-truncate-target') {
                $owner = $span->nodeValue;
            }
            if ($class === 'repo') {
                $repoName = $span->nodeValue;
            }
            if ($class === 'stars') {
                $nbStars = $span->nodeValue;
            }
        }

        return array(
            'name' => $owner . '/' . $repoName,
            'link' => 'https://github.com' . $link->attributes->getNamedItem('href')->nodeValue,
            'stars' => $nbStars
        );
    }
}