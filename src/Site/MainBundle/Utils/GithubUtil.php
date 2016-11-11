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

        $tabLi = $dom->getElementsByTagName('li');
        $tabLiListRepo = array();
        foreach ($tabLi as $liNode) {
            $class = @$liNode->attributes->getNamedItem('class')->nodeValue;
            if (strpos($class, 'pinned-repo-item') !== false) {
                $tabLiListRepo[] = $liNode;
            }
        }

        if (count($tabLiListRepo) === 0) {
            throw new \Exception('List of repository not found');
        }

        $tabRepo = array();
        foreach ($tabLiListRepo as $li) {
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
            if ($class === 'owner text-normal') {
                $owner = $span->nodeValue;
            }
            if ($class === 'repo js-repo') {
                $repoName = $span->nodeValue;
            }
        }
        $linkHrefStar = '/' . $owner . '/' . $repoName . '/stargazers';
        foreach($tabLink as $link) {
            $tmpHref = $link->attributes->getNamedItem('href')->nodeValue;
            if ($tmpHref === $linkHrefStar) {
                $nbStars = trim($link->nodeValue);
            }
        }

        return array(
            'name' => $owner . '/' . $repoName,
            'link' => 'https://github.com' . $link->attributes->getNamedItem('href')->nodeValue,
            'stars' => $nbStars
        );
    }
}
