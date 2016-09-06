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
            if ($class === 'boxed-group-inner mini-repo-list js-pinned-repos-reorder-list') {
                $tabUListRepo[] = $ul;
            }
        }

        if (count($tabUListRepo) === 0) {
            throw new \Exception('List of repository not found');
        }

        $uListRepo = $tabUListRepo[0];
        $tabLi = $uListRepo->getElementsByTagName('li');
        $tabRepo = array();
        foreach ($tabLi as $li) {
            $tabRepo[] = $this->getRepoByLi($li);
        }
        return $tabRepo;
    }

    private function getRepoByLi(\DOMNode $li) {
        $tabLink = $li->getElementsByTagName('a');
        if ($tabLink->length === 0) {
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
            if ($class === 'repo js-repo') {
                $repoName = $span->nodeValue;
            }
            if ($class === 'stars') {
                $nbStars = trim($span->nodeValue);
            }
        }

        return array(
            'name' => $owner . '/' . $repoName,
            'link' => 'https://github.com' . $link->attributes->getNamedItem('href')->nodeValue,
            'stars' => $nbStars
        );
    }
}
