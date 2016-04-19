angular.module('mySiteApp', ['ngMock']);

// Config app to send XMLHttpRequest header
angular.module('mySiteApp').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);
