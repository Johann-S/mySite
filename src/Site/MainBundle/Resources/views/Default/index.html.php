<?php $view->extend('::base.html.php'); ?>
<div class="jumbotron">
    <div id="mediaIndex" class="media">
        <div class="media-left">
            <img id="img_me" class="media-object img-thumbnail" src="<?php echo $view['assets']->getUrl('img/moi.jpg') ?>" />
        </div>
        <div class="media-body">
            <p>
                <?php echo $view['translator']->trans('home_employ') ?>
                <?php echo $view['translator']->trans('home_work') ?> <a href="https://www.groupe-ldlc.com/">LDLC</a>
            </p>
            <p>Mentor <a href="https://openclassrooms.com/">OpenClassRoom</a></p>
            <p>Open Source <a href="https://github.com/Johann-S">lover</a></p>

            <ul class="list-unstyled">
                <li><b>Age:</b> <?php echo $age; ?> <?php echo $view['translator']->trans('home_years') ?></li>
                <li><b><?php echo $view['translator']->trans('home_location') ?>:</b> Lyon</li>
                <li><b><?php echo $view['translator']->trans('home_transport') ?>:</b> <?php echo $view['translator']->trans('home_drive') ?></li>
                <li>
                    <b><?php echo $view['translator']->trans('home_goal') ?>:</b><br/>
                    <p style="font-size: 18px;">
                        <?php echo $view['translator']->trans('home_goal_text') ?>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>