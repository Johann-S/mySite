<!DOCTYPE html>
<html lang="fr" ng-app="mySiteApp">
	<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php $view['slots']->output('title', 'Johann SERVOIRE') ?></title>
		<meta name="description" content="">
		<meta name="author" content="Johann SERVOIRE">

		<link href="<?php echo $view['assets']->getUrl('css/bootstrap.min.css') ?>" rel="stylesheet" type="text/css" />
		<link href="<?php echo $view['assets']->getUrl('css/font-awesome.min.css') ?>" rel="stylesheet" type="text/css" />
		<link href="<?php echo $view['assets']->getUrl('css/main.css') ?>" rel="stylesheet" type="text/css" />
		<?php 
		if ( isset($styles) && is_array($styles) ) :
		foreach ( $styles as $css ) : ?>
		<link href="<?php echo $view['assets']->getUrl($css); ?>" rel="stylesheet" type="text/css" />
		<?php endforeach; endif; ?>

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
	</head>

	<body>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="<?php echo $view['router']->generate('main_homepage'); ?>">Johann SERVOIRE</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li <?php if (isset($activeIndex)) : ?>class="active"<?php endif; ?>>
                            <a href="<?php echo $view['router']->generate('main_homepage'); ?>">Accueil</a>
                        </li>
                        <li>
                            <a href="/cv/CV.pdf">CV</a>
                        </li>
                        <li <?php if (isset($activeSkills)) : ?>class="active"<?php endif; ?>>
                            <a href="<?php echo $view['router']->generate('skills_page'); ?>">Compétences</a>
                        </li>
                        <li <?php if (isset($activeExp)) : ?>class="active"<?php endif; ?>>
                            <a href="<?php echo $view['router']->generate('experience_page'); ?>">Etudes et expériences</a>
                        </li>
                        <li <?php if (isset($activeContact)) : ?>class="active"<?php endif; ?>>
                            <a href="<?php echo $view['router']->generate('contact_page'); ?>">Contact</a>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        <div class="container">
            <?php $view['slots']->output('_content'); ?>
        </div>
        <div class="footer">
            <div class="container">
                <p class="text-muted">© 2015 - <a href="http://www.johann-servoire.fr/">SERVOIRE Johann</a> tous droits réservés.</p>
                <ul id="listSocial" class="list-inline">
                    <li>
                        <a href="https://github.com/Johann-S">
                            <i class="fa fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/johann.servoire">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/jservoire">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://plus.google.com/u/0/+JohannServoire/">
                            <i class="fa fa-google-plus"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
	</body>
	<script src="<?php echo $view['assets']->getUrl('js/libs/jquery.js'); ?>"></script>
	<script src="<?php echo $view['assets']->getUrl('js/libs/angular.min.js'); ?>"></script>
    <script src="<?php echo $view['assets']->getUrl('js/mySiteApp.js'); ?>"></script>
    <script src="<?php echo $view['assets']->getUrl('js/libs/bootstrap.min.js'); ?>"></script>
	<?php
	if ( isset($scripts) && is_array($scripts) ) :
	foreach ( $scripts as $js ) : ?>
	<script src="<?php echo $view['assets']->getUrl($js); ?>"></script>
	<?php endforeach; endif; ?>
</html>
