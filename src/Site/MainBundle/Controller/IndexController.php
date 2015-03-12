<?php

namespace Site\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IndexController extends Controller
{
    public function indexAction()
    {
        return $this->render('MainBundle:Default:index.html.php',array(
            'scripts' => array('js/indexCtrl.js')
        ));
    }
}
