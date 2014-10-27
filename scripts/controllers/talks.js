define(['controllers', 'controllers/crud'], function(controllers, crud) {
  'use strict';

  controllers.controller('TalksController', function($scope, syncData) {
    var key = 'talks'
    var fn = crud(key);

    fn($scope, syncData);
    var old_publish = $scope.publish;
    $scope.publish = function(item) {
      old_publish.apply($scope, [item]);
      item.slug = (item.who + '-' + (item.series_name ? item.series_name + '-' : '') + item.title).toLowerCase().replace(/[^A-Za-z0-9]/g, '-');
      var index = syncData("talks-by-slug/" + item.slug)
      index.$set(item.id);
    }

    var old_unpublish = $scope.unpublish;
    $scope.unpublish = function(item) {
      old_unpublish.apply($scope, [item]);
      syncData("talks-by-slug/").$remove(item.slug);
    }
  });
});
