<?php

namespace Site\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function indexAction() {
        return $this->render('MainBundle:Default:index.html.php',array(
            'activeIndex' => true,
            'scripts' => array('js/indexCtrl.js')
        ));
    }

    public function skillsAction() {
        return $this->render('MainBundle:Skills:skills.html.php',array(
            'activeSkills' => true
        ));
    }

    public function experienceAction() {
        $buzz = $this->container->get('buzz');
        $response = $buzz->get('https://api.github.com/users/johann-s',array(
            'User-Agent: Johann-S'
        ));
        $dataReponse = json_decode($response->getContent(),true);
        return $this->render('MainBundle:Default:experience.html.php',array(
            'activeExp' => true,
            'response' => $dataReponse
        ));
    }
}
