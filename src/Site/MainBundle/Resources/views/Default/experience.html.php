<?php
    $view->extend('::base.html.php');
    $view['slots']->set('title', 'Experiences - Johann SERVOIRE');
?>
<div class="panel panel-default">
    <div class="panel-heading">Experiences</div>
    <div class="panel-body">
        <ul class="list-unstyled listExp">
            <li>
                <span class="label label-info expLabel">2012 <i class="fa fa-arrow-right"></i> 2015</span><?php echo $view['translator']->trans('exp_it') ?> <a href="http://www.interactiv-technologies.fr/">Interactiv' Technologies</a>
            </li>
            <li>
                <span class="label label-info expLabel">2015</span><?php echo $view['translator']->trans('exp_ic') ?> <a href="https://www.imaginecup.com/">ImagineCup</a> <?php echo $view['translator']->trans('exp_ic2') ?> : <a href="http://www.omnitag.fr">http://www.omnitag.fr</a>
            </li>
            <li>
                <span class="label label-info expLabel">2011</span><?php echo $view['translator']->trans('exp_alchi') ?>  <a href="http://www.alchimiste.fr/">Alchimiste</a>
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
        <h4><?php echo $view['translator']->trans('githubContrib') ?></h4>
        <table id="tableContrib" class="table table-bordered table-hover">
            <tbody>
                <?php foreach ($contrib as $repo) : ?>
                <tr>
                    <td>
                        <a href="<?php echo $repo['link']; ?>"><?php echo $repo['name']; ?></a>
                    </td>
                    <td><?php echo $repo['stars']; ?> <span class="fa fa-star"></span></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
<div class="panel panel-default">
    <div class="panel-heading"><?php echo $view['translator']->trans('studies_title') ?></div>
    <div class="panel-body">
        <ul class="list-unstyled listExp">
            <li>
                <span class="label label-info expLabel">2015 <i class="fa fa-arrow-right"></i> 2016</span><?php echo $view['translator']->trans('studies_master') ?> - <a href="http://www.epsi.fr/">EPSI Lyon</a>
            </li>
            <li>
                <span class="label label-info expLabel">2013 <i class="fa fa-arrow-right"></i> 2014</span><?php echo $view['translator']->trans('studies_licence') ?> - <a href="http://www.epsi.fr/">EPSI Lyon</a>
            </li>
            <li>
                <span class="label label-info expLabel">2011 <i class="fa fa-arrow-right"></i> 2012</span><?php echo $view['translator']->trans('studies_bts') ?> - Lycée Edouard Branly - Lyon
            </li>
            <li>
                <span class="label label-info expLabel">2009 <i class="fa fa-arrow-right"></i> 2010</span><?php echo $view['translator']->trans('studies_bac') ?> - Lycée Jean-Baptiste De La Salle - Lyon
            </li>
        </ul>
    </div>
</div>