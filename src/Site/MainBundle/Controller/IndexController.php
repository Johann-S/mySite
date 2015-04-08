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
        return $this->render('MainBundle:Default:experience.html.php',array(
            'activeExp' => true
        ));
    }
}
