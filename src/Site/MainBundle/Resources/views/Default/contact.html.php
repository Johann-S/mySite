<?php
    $view->extend('::base.html.php');
    $view['slots']->set('title', 'Contact - Johann SERVOIRE');
?>
<div id="contactJumbotron" class="jumbotron col-md-9">
    <form class="form-horizontal" ng-controller="contactCtrl">
        <fieldset>
            <legend>Me contacter</legend>
            <div id="formGrpMail" class="form-group">
                <label for="inputEmail" class="col-sm-4 control-label">Votre adresse email :</label>
                <div class="col-sm-7">
                    <input type="email" ng-model="email" class="form-control" id="inputEmail" placeholder="Email" />
                </div>
            </div>
            <div id="formGrpObjet" class="form-group">
                <label for="inputObjet" class="col-sm-4 control-label">L'objet du message :</label>
                <div class="col-sm-7">
                    <input type="text" ng-model="objet" class="form-control" id="inputObjet" placeholder="Objet" />
                </div>
            </div>
            <div id="formGrpMsg" class="form-group">
                <label for="textAreaMessage" class="col-sm-4 control-label">Message :</label>
                <div class="col-sm-7">
                    <textarea id="textAreaMessage" ng-model="message" class="form-control"></textarea>
                </div>
            </div>
            <div id="formGrpCaptcha" class="form-group">
                <label for="inputCaptcha" class="col-sm-4 control-label">
                    <span>Calculez : </span><span>{{fNum}}</span><span>{{opCap}}</span><span>{{sNum}}</span>
                </label>
                <div class="col-sm-3">
                    <input type="text" class="form-control" id="inputCaptcha" style="display: inline;width: 80px;" ng-model="answerCaptcha" />
                    <button class="btn btn-default" ng-click="generateCaptcha()">
                        <span class="glyphicon glyphicon-refresh"></span>
                    </button>
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-4 control-label"></label>
                <div class="col-sm-7">
                    <button class="btn btn-primary" ng-click="submitForm($event);">Envoyer</button>
                </div>
            </div>
        </fieldset>
    </form>
</div>