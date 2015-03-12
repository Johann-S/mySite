<!DOCTYPE html>
<html lang="fr" ng-app="events4App">
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
        <div class="container">
            <?php $view['slots']->output('_content'); ?>
        </div>
        <div class="footer">
            <div class="container">
                <p class="text-muted">Footer</p>
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
