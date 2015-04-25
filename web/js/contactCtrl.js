app.controller('contactCtrl',function ($scope, $http) {
    $scope.email = '';
    $scope.objet = '';
    $scope.message = '';
    $scope.tabOp = ['+','-','x'];
    $scope.fNum = '';
    $scope.sNum = '';
    $scope.answerCaptcha = '';
    $scope.msgResult = '';

    // generate random captcha
    $scope.generateCaptcha = function() { randomCaptcha(this); };
    var randomCaptcha = function($scope) {
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
        if (this.validateForm()) {
            var scope = this;
            var tabVars = {
                email: this.email,
                objet: this.objet,
                message: this.message
            };
            $('#btnSend').addClass('disable');
            $('#loader').show();
            $http.post(window.location.href,tabVars)
            .success(function (data) {
                var classResult = (data['message'] && data['message'] === 'OK') ? 'alert-success' : 'alert-danger';
                scope.msgResult = data['user_msg'];
                $('#alertResult').addClass(classResult)
                                 .show();
                if (data['message'] === 'OK') {
                    $('form').remove();
                }
                else {
                    $('#btnSend').removeClass('disable');
                    $('#loader').hide();
                }
            })
            .error(function() {
                scope.msgResult = 'Une erreur est survenue';
                $('#btnSend').removeClass('disable');
                $('#loader').hide();
                $('#alertResult').addClass('alert-danger')
                                 .show();
            });
        }
    };

    $scope.validateForm = function () {
        var EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        var tabErr = [];
        if (!EMAIL_REGEXP.test(this.email)) {
            tabErr.push('#formGrpMail');
        }

        if (this.objet.length === 0) {
            tabErr.push('#formGrpObjet');
        }

        if (this.message.length === 0) {
            tabErr.push('#formGrpMsg');
        }

        // Check captcha
        if (this.answerCaptcha.length > 0) {
            var tmpAnswer = parseInt(this.answerCaptcha);
            if (isNaN(tmpAnswer)) {
                tabErr.push('#formGrpCaptcha');
            }
            else {
                var result = 0;
                if (this.opCap === '-') {
                    result = this.fNum - this.sNum;
                }
                if (this.opCap === '+') {
                    result = this.fNum + this.sNum;
                }
                if (this.opCap === 'x') {
                    result = this.fNum * this.sNum;
                }
                if (result !== tmpAnswer) {
                    tabErr.push('#formGrpCaptcha');
                }
            }
        }
        else {
            tabErr.push('#formGrpCaptcha');
        }

        if (tabErr.length > 0) {
            this.addError(tabErr);
            return false;
        }

        return true;
    };

    $scope.addError = function (tabDiv) {
        var nbDiv = tabDiv.length;
        if (nbDiv === 0 && !angular.isArray(tabDiv)) return;
        for (var i = 0; i < nbDiv; i++)  {
            $(tabDiv[i]).addClass('has-error');
        }
    };

    $scope.clearError = function() {
        $('.form-group').each(function(){
            if ($(this).hasClass('has-error')) {
                $(this).removeClass('has-error');
            }
        });
    };
});