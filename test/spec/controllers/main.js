define([
  'angularMocks',
  'controllers/main',
], function(mocks) {
  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(mocks.module('vineyardadmin.controllers'));

    var MainCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(mocks.inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
