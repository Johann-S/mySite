<?php
    $view->extend('::base.html.php');
    $view['slots']->set('title', 'Contact - Johann SERVOIRE');
?>
<div id="contactJumbotron" class="jumbotron col-md-9">
    <form class="form-horizontal">
        <fieldset>
            <legend>Me contacter</legend>
            <div class="form-group">
                <label for="inputEmail" class="col-sm-4 control-label">Votre adresse email :</label>
                <div class="col-sm-7">
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
                </div>
            </div>
            <div class="form-group">
                <label for="inputObjet" class="col-sm-4 control-label">L'objet du message :</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" id="inputObjet" placeholder="Objet" />
                </div>
            </div>
            <div class="form-group">
                <label for="textAreaMessage" class="col-sm-4 control-label">Message :</label>
                <div class="col-sm-7">
                    <textarea id="textAreaMessage" class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4 control-label"></label>
                <div class="col-sm-7">
                    <button class="btn btn-primary">Envoyer</button>
                </div>
            </div>
        </fieldset>
    </form>
</div>