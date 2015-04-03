<?php
    $view->extend('::base.html.php');
    $view['slots']->set('title', 'Compétences - Johann SERVOIRE');
?>
<div class="panel panel-default">
    <div id="skillPanelHead" class="panel-heading">Compétences</div>
    <div class="panel-body tabs-left">
        <ul role="tablist" class="nav nav-pills nav-stacked" id="myTab">
            <li class="active" role="presentation">
                <a aria-expanded="true" aria-controls="home" data-toggle="tab" role="tab" id="prog-tab" href="#progLang">Langages</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" id="framework-tab" role="tab" href="#tabFram">Frameworks / ORM / ODM</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#profile">IDE</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#profile">OS</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#profile">Versionning</a>
            </li>
            <li role="presentation">
                <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#profile">Base de données</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div id="progLang" aria-labelledby="prog-tab" class="tab-pane fade in active" role="tabpanel">
                <?php echo $view->render('MainBundle:Skills:list_languages_skills.html.php'); ?>
            </div>
            <div aria-labelledby="profile-tab" id="tabFram" class="tab-pane fade" role="tabpanel">
                <?php echo $view->render('MainBundle:Skills:list_framework_skills.html.php'); ?>
            </div>
            <div aria-labelledby="dropdown1-tab" id="dropdown1" class="tab-pane fade" role="tabpanel">
                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
            </div>
            <div aria-labelledby="dropdown2-tab" id="dropdown2" class="tab-pane fade" role="tabpanel">
                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
            </div>
            <div aria-labelledby="dropdown2-tab" id="dropdown3" class="tab-pane fade" role="tabpanel">
                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
            </div>
        </div>
    </div>
</div>