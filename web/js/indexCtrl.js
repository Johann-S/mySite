app.controller('indexCtrl',function ($scope) {
    $scope.knowMore = function() {
        var cssDisplay = $("#btnKnowMore").css('display');
        if (cssDisplay === 'inline-block' || cssDisplay === 'block') {
            $("#btnKnowMore").hide();
            $('#learnMore').show();
        }
    };
});
