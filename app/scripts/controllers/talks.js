define(['controllers', 'controllers/crud'], function(controllers, crud) {
  'use strict';

  controllers.controller('TalksController', function($scope, syncData) {
    crud('talks')($scope, syncData);
  });
});
