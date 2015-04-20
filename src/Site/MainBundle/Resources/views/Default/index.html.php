<?php $view->extend('::base.html.php'); ?>
<div class="jumbotron" ng-controller="indexCtrl">
    <div id="mediaIndex" class="media">
        <div class="media-left">
            <a href="#">
                <img id="img_me" class="media-object img-responsive img-thumbnail" src="<?php echo $view['assets']->getUrl('img/moi.jpg') ?>" alt="...">
            </a>
        </div>
        <div class="media-body">
            <p>
                Etudiant en quatrième année du cycle d'ingénierie à l'EPSI Lyon.<br/>
                Développeur Web en alternance pour la société <a href="http://www.interactiv-technologies.fr"/>Interactiv' Technologies</a>.
            </p>
            <div id="learnMore">
                <ul class="list-unstyled">
                    <li><b>Age:</b> 25 ans</li>
                    <li><b>Lieu de résidence:</b> Région Lyonnaise</li>
                    <li><b>Moyen de locomotion:</b> Permis B et véhiculé</li>
                    <li style="margin-top: 10px;">
                        <b>Mon ambition:</b><br/>
                        <p style="font-size: 18px;">
                            Acquérir de l'expérience en développement, gestion de projet et obtenir mon
                            Master en Ingénierie Informatique.
                        </p>
                    </li>
                </ul>
            </div>
            <p><button id="btnKnowMore" class="btn btn-primary btn-lg" ng-click="knowMore();">En savoir plus</button></p>
        </div>
    </div>
</div>