<?php
    $view->extend('::base.html.php');
    $view['slots']->set('title', 'Experiences - Johann SERVOIRE');
?>
<div class="panel panel-default">
    <div class="panel-heading">Experiences</div>
    <div class="panel-body">
        <ul class="list-unstyled listExp">
            <li>
                <div class="row">
                    <div class="col-md-1">
                        <span class="label label-info expLabel">2018 <i class="fa fa-arrow-right"></i> ?</span>
                    </div>
                    <div class="col-md-6">
                        <?php echo $view['translator']->trans('exp_ldlc') ?> <a href="https://www.groupe-ldlc.com/">LDLC</a>
                    </div>
                </div>
            </li>
            <li>
                <div class="row">
                    <div class="col-md-1">
                        <span class="label label-info expLabel">2016 <i class="fa fa-arrow-right"></i> 2017</span>
                    </div>
                    <div class="col-md-6">
                        <?php echo $view['translator']->trans('exp_sii') ?> <a href="http://www.groupe-sii.com/">SII</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-8">
                        <a role="button" data-toggle="collapse" href="#siiMissions" aria-expanded="false" aria-controls="siiMissions">Missions</a>
                        <div id="siiMissions" class="collapse">
                            <ul>
                                <li>Carrefour: <?php echo $view['translator']->trans('mission_sii_carrefour') ?></li>
                                <li>Orange Business: <?php echo $view['translator']->trans('mission_sii_orange') ?></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="row">
                    <div class="col-md-1">
                        <span class="label label-info expLabel">2012 <i class="fa fa-arrow-right"></i> 2016</span>
                    </div>
                    <div class="col-md-6">
                        <?php echo $view['translator']->trans('exp_it') ?> <a href="https://www.interactiv-technologies.com/fr/">Interactiv' Technologies</a>
                    </div>
                </div>
            </li>
            <li>
                <div class="row">
                    <div class="col-md-1">
                        <span class="label label-info expLabel">2015</span>
                    </div>
                    <div class="col-md-6">
                        <?php echo $view['translator']->trans('exp_ic') ?> <a href="https://www.imaginecup.com/">ImagineCup</a> <?php echo $view['translator']->trans('exp_ic2') ?>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="panel panel-default" ng-controller="experienceGithubCtrl">
    <div class="panel-heading">Github</div>
    <div class="panel-body">
        <div ng-if="error" class="alert alert-danger" role="alert">
            <p><?php echo $view['translator']->trans('contact_msgResultFail') ?></p>
        </div>
        <div ng-if="loading">
            <span class="fa fa-refresh fa-2x fa-spin"></span>
        </div>
        <div ng-if="!loading && !error">
            <div class="media">
                <div class="media-left">
                    <a href="{{ htmlUrl }}">
                        <img id="githubAvatar" class="media-object" src="{{ avatarUrl }}" />
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">
                        <a href="{{ htmlUrl }}">{{ login }}</a>
                    </h4>
                    <ul id="listGithub" class="list-inline">
                        <li>
                            <h4>{{ followers }}</h4>
                            Followers
                        </li>
                        <li>
                            <h4>{{ following }}</h4>
                            Following
                        </li>
                        <li>
                            <h4>{{ publicRepos }}</h4>
                            Repository
                        </li>
                    </ul>
                </div>
            </div>
            <h4><?php echo $view['translator']->trans('githubContrib') ?></h4>
            <table id="tableContrib" class="table table-bordered">
                <tbody>
                    <tr ng-repeat="contrib in contribList">
                        <td>
                            <a href="{{ contrib.link }}">{{ contrib.name }}</a>
                        </td>
                        <td>
                            {{ contrib.stars }} <span class="fa fa-star"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
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
<script>
    window.urlExperienceGithub = '<?php echo $urlExperienceGithub ?>';
</script>
