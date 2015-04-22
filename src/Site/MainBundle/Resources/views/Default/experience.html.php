<?php
    $view->extend('::base.html.php');
    $view['slots']->set('title', 'Experiences - Johann SERVOIRE');
?>
<div class="panel panel-default">
    <div class="panel-heading">Experiences</div>
    <div class="panel-body">
        <ul class="list-unstyled listExp">
            <li>
                <span class="label label-info expLabel">2012 <i class="fa fa-arrow-right"></i> 2015</span>Développeur Web pour la société <a href="http://www.interactiv-technologies.fr/">Interactiv' Technologies</a>
            </li>
            <li>
                <span class="label label-info expLabel">2015</span>Arrivé troisième de la final national de <a href="https://www.imaginecup.com/">l'ImagineCup</a> catégorie innovation : <a href="http://www.omnitag.fr">http://www.omnitag.fr</a>
            </li>
            <li>
                <span class="label label-info expLabel">2011</span>Stage de Développement web (6 semaines) pour l'entreprise <a href="http://www.alchimiste.fr/">Alchimiste</a>
            </li>
        </ul>
    </div>
</div>
<div class="panel panel-default">
    <div class="panel-heading">Github</div>
    <div class="panel-body">
        <div class="media">
            <div class="media-left">
                <a href="<?php echo $response['html_url']; ?>">
                    <img id="githubAvatar" class="media-object" src="<?php echo $response['avatar_url']; ?>" />
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    <a href="<?php echo $response['html_url']; ?>">
                        <?php echo $response['login']; ?>
                    </a>
                </h4>
                <ul id="listGithub" class="list-inline">
                    <li>
                        <h4><?php echo $response['followers']; ?></h4>
                        Followers
                    </li>
                    <li>
                        <h4><?php echo $response['following']; ?></h4>
                        Following
                    </li>
                    <li>
                        <h4><?php echo $response['public_repos']; ?></h4>
                        Repository
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="panel panel-default">
    <div class="panel-heading">Etudes</div>
    <div class="panel-body">
        <ul class="list-unstyled listExp">
            <li>
                <span class="label label-info expLabel">2015</span>Etudiant en quatrième année du cycle d'ingénierie - <a href="http://www.epsi.fr/">l'EPSI Lyon</a>.
            </li>
            <li>
                <span class="label label-info expLabel">2013 <i class="fa fa-arrow-right"></i> 2014</span>Bachelor informatique - EPSI Lyon
            </li>
            <li>
                <span class="label label-info expLabel">2011 <i class="fa fa-arrow-right"></i> 2012</span>BTS I.R.I.S (Informatique et Réseaux pour l'industrie et les Services techniques) - Lycée Edouard Branly - Lyon (69005)
            </li>
            <li>
                <span class="label label-info expLabel">2009 <i class="fa fa-arrow-right"></i> 2010</span>Bac STI Electronique - Lycée Jean-Baptiste De La Salle - Lyon (69001)
            </li>
        </ul>
    </div>
</div>