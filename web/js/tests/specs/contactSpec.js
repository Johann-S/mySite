describe('Contact controller', function () {
    var scope;
    var ctrl;
    beforeEach(angular.mock.module('mySiteApp'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller, contactService) {
        scope = $rootScope.$new();
        ctrl = $controller('contactCtrl', {
            $scope: scope,
            contactService: contactService
        });
    }));

    it('First and second number should be greater than 0', function () {
        expect(scope.fNum > 0).toBe(true);
        expect(scope.sNum > 0).toBe(true);
    });
});
