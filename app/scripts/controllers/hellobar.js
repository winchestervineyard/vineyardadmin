define(['controllers', 'controllers/crud'], function(controllers, crud) {
  'use strict';

  controllers.controller('HellobarController', function($scope, syncData) {
    crud('hellobar')($scope, syncData);
  });
});
