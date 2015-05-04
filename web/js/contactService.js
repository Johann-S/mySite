(function() {
    'use strict';

    angular.module('mySiteApp').service('contactService', contactService);
    contactService.$inject = ['$http'];
    function contactService($http) {
        return {
            validateData: validate,
            send: send
        };

        function send(tabVars) {
            return $http.post(window.location.href,tabVars)
                        .then(sendSuccess)
                        .catch(sendError);

            function sendSuccess(data) {
                return data;
            }

            function sendError(data) {
                return data;
            }
        }

        function validate($scope) {
            var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
            var tabErr = [];
            if (!emailRegex.test($scope.email)) {
                tabErr.push('#formGrpMail');
            }

            if ($scope.objet.length === 0) {
                tabErr.push('#formGrpObjet');
            }

            if ($scope.message.length === 0) {
                tabErr.push('#formGrpMsg');
            }

            // Check captcha
            if ($scope.answerCaptcha.length > 0) {
                var tmpAnswer = parseInt($scope.answerCaptcha);
                if (isNaN(tmpAnswer)) {
                    tabErr.push('#formGrpCaptcha');
                }
                else {
                    var result = 0;
                    if ($scope.opCap === '-') {
                        result = $scope.fNum - $scope.sNum;
                    }
                    if ($scope.opCap === '+') {
                        result = $scope.fNum + $scope.sNum;
                    }
                    if ($scope.opCap === 'x') {
                        result = $scope.fNum * $scope.sNum;
                    }
                    if (result !== tmpAnswer) {
                        tabErr.push('#formGrpCaptcha');
                    }
                }
            }
            else {
                tabErr.push('#formGrpCaptcha');
            }

            return tabErr;
        }
    }
})();