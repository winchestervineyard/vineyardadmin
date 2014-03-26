define(['controllers', 'controllers/crud'], function(controllers, crud) {
  'use strict';

  controllers.controller('NewsController', function($scope, syncData) {
    crud('news')($scope, syncData);
  });
});
