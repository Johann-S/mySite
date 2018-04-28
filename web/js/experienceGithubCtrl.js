(function () {
    'use strict';

    angular.module('mySiteApp').controller('experienceGithubCtrl', experienceGithubCtrl);
    experienceGithubCtrl.$inject = ['$scope', '$http', '$window'];

    function experienceGithubCtrl($scope, $http, $window) {
        $scope.avatarUrl = '';
        $scope.htmlUrl = '';
        $scope.login = '';
        $scope.followers = 0;
        $scope.following = 0;
        $scope.publicRepos = 0;
        $scope.contribList = [];
        $scope.loading = true;
        $scope.error = false;

        $http.get($window.urlExperienceGithub)
            .then(function (response) {
                var githubResponse = response.data.response;
                $scope.avatarUrl = githubResponse.avatar_url;
                $scope.htmlUrl = githubResponse.html_url;
                $scope.login = githubResponse.login;
                $scope.followers = githubResponse.followers;
                $scope.following = githubResponse.following;
                $scope.publicRepos = githubResponse.public_repos;
                $scope.contribList = response.data.contrib;
                $scope.loading = false;
            })
            .catch(function () {
                $scope.error = true;
                $scope.loading = false;
            });
    }
})();
