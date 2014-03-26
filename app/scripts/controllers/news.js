define(['controllers'], function(controllers) {
  'use strict';

  controllers.controller('NewsController', function($scope, syncData) {
    syncData('news').$bind($scope, 'news');

    $scope.edit = function(item) {
      if (item.published) {
        $scope.errorMessage = 'Please unpublish this item before editing.';
        return;
      }
      //$scope.errorMessage = '';
      //item['edited_at'] = new Date();
      //item['last_edited_by'] = $scope.auth.user.email;
      $scope.subject = item;
    };

    $scope.doneEditing = function() {
      $scope.subject = null;
    };
  });
});
