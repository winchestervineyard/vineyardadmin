define(['angular', 'controllers'], function(angular, controllers) {
  'use strict';

  controllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
});
