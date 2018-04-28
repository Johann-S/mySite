<?php
    $view->extend('::base.html.php');
    $view['slots']->set('title', $view['translator']->trans('skills_title') . ' - Johann SERVOIRE');
?>
<div class="panel panel-default">
    <div class="panel-heading"><?php echo $view['translator']->trans('skills_title') ?></div>
    <div id="panelSkills" class="panel-body tabs-left">
        <ul id="myTab" role="tablist" class="nav nav-pills nav-stacked col-md-2" style="padding-right: 0">
            <li class="active" role="presentation">
                <a aria-expanded="true" aria-controls="home" data-toggle="tab" role="tab" id="prog-tab" href="#progLang">
                    <?php echo $view['translator']->trans('skills_lang') ?>
                </a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" role="tab" href="#tabFram">Frameworks / Libs</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" role="tab" href="#tabIde">Testing</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" role="tab" href="#tabOS">OS</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" role="tab" href="#tabVersion">Versionning</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" role="tab" href="#tabBdd">
                    <?php echo $view['translator']->trans('skills_bdd') ?>
                </a>
            </li>
        </ul>
        <div class="tab-content col-md-9" id="myTabContent">
            <div id="progLang" aria-labelledby="prog-tab" class="tab-pane fade in active" role="tabpanel">
                <?php echo $view->render('MainBundle:Skills:list_languages_skills.html.php'); ?>
            </div>
            <div aria-labelledby="profile-tab" id="tabFram" class="tab-pane fade" role="tabpanel">
                <?php echo $view->render('MainBundle:Skills:list_framework_skills.html.php'); ?>
            </div>
            <div aria-labelledby="dropdown1-tab" id="tabIde" class="tab-pane fade" role="tabpanel">
                <?php echo $view->render('MainBundle:Skills:list_testing_skills.html.php'); ?>
            </div>
            <div aria-labelledby="dropdown2-tab" id="tabOS" class="tab-pane fade" role="tabpanel">
                <?php echo $view->render('MainBundle:Skills:list_os_skills.html.php'); ?>
            </div>
            <div aria-labelledby="dropdown2-tab" id="tabVersion" class="tab-pane fade" role="tabpanel">
                <?php echo $view->render('MainBundle:Skills:list_version_skills.html.php'); ?>
            </div>
            <div aria-labelledby="dropdown2-tab" id="tabBdd" class="tab-pane fade" role="tabpanel">
                <?php echo $view->render('MainBundle:Skills:list_bdd_skills.html.php'); ?>
            </div>
        </div>
    </div>
</div>