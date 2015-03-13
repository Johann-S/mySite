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
                <a aria-controls="profile" data-toggle="tab" id="profile-tab" role="tab" href="#profile">Frameworks</a>
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
        </ul>
        <div class="tab-content" id="myTabContent">
            <div id="progLang" aria-labelledby="prog-tab" class="tab-pane fade in active" role="tabpanel">
                <span class="rating">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </span>
            </div>
            <div aria-labelledby="profile-tab" id="profile" class="tab-pane fade" role="tabpanel">
                <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
            </div>
            <div aria-labelledby="dropdown1-tab" id="dropdown1" class="tab-pane fade" role="tabpanel">
                <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
            </div>
            <div aria-labelledby="dropdown2-tab" id="dropdown2" class="tab-pane fade" role="tabpanel">
                <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
            </div>
        </div>
    </div>
</div>