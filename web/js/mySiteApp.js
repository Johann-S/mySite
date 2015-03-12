var app = angular.module('mySiteApp', []);

// Config app to send XMLHttpRequest header
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);