(function () {
    'use strict';

    angular.module('mySiteApp').controller('contactCtrl', contactCtrl);
    contactCtrl.$inject = ['$scope', 'contactService'];
    function contactCtrl($scope, contactService) {
        $scope.email = '';
        $scope.objet = '';
        $scope.message = '';
        $scope.tabOp = ['+','-','x'];
        $scope.fNum = '';
        $scope.sNum = '';
        $scope.answerCaptcha = '';
        $scope.msgResult = '';

        // generate random captcha
        $scope.generateCaptcha = function () { randomCaptcha(this); };
        var randomCaptcha = function ($scope) {
            var tmpIndex = Math.floor((Math.random() * 3) + 1);
            tmpIndex--;
            $scope.opCap = $scope.tabOp[tmpIndex];
            $scope.fNum = Math.floor((Math.random() * 10) + 1);
            $scope.sNum = Math.floor((Math.random() * 10) + 1);
            if ($scope.opCap === '-') {
                if ($scope.fNum < $scope.sNum) {
                    var tmpfNum = $scope.fNum;
                    $scope.fNum = $scope.sNum;
                    $scope.sNum = tmpfNum;
                }
            }
        };
        randomCaptcha($scope);

        $scope.submitForm = function ($e) {
            $e.preventDefault();
            if ($('#btnSend').hasClass('disable')) {
                return;
            }
            this.clearError();
            $('#alertResult').removeClass('alert-danger').hide();
            var tabErr = contactService.validateData(this);
            if (tabErr.length > 0) {
                this.addError(tabErr);
                return;
            }

            var scope = this;
            var tabVars = {
                email: this.email,
                objet: this.objet,
                message: this.message
            };
            $('#btnSend').addClass('disable');
            $('#loader').show();
            contactService.send(tabVars)
            .then(function (response) {
                var data = response.data;
                var classResult = (data.message && data.message === 'OK') ? 'alert-success' : 'alert-danger';
                scope.msgResult = data.userMsg;
                $('#alertResult').addClass(classResult)
                    .show();
                if (data.message === 'OK') {
                    $('form').remove();
                }
                else {
                    $('#btnSend').removeClass('disable');
                    $('#loader').hide();
                }
            })
            .catch(function (response) {
                var data = response.data;
                scope.msgResult = 'Une erreur est survenue';
                $('#btnSend').removeClass('disable');
                $('#loader').hide();
                $('#alertResult').addClass('alert-danger').show();
            });
        };

        $scope.addError = function (tabDiv) {
            var nbDiv = tabDiv.length;
            if (nbDiv === 0 && !angular.isArray(tabDiv)) {
                return;
            }
            for (var i = 0; i < nbDiv; i++)  {
                $(tabDiv[i]).addClass('has-error');
            }
        };

        $scope.clearError = function () {
            $('.form-group').each(function () {
                if ($(this).hasClass('has-error')) {
                    $(this).removeClass('has-error');
                }
            });
        };
    }
})();
