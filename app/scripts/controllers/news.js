define(['controllers'], function(controllers) {
  'use strict';

  controllers.controller('NewsController', function($scope, syncData) {
    syncData('news').$bind($scope, 'news');

    $scope.edit = function(id) {
      $scope.id = id;
      if ($scope.news[id].published) {
        $scope.errorMessage = 'Please unpublish this item before editing.';
        $scope.editing = false;
        return;
      }
      $scope.editing = true;
      $scope.errorMessage = '';
      $scope.news[id]['edited_at'] = new Date();
      $scope.news[id]['id'] = id;
      $scope.news[id]['last_edited_by'] = $scope.auth.user.email;
    };

    $scope.editingThis = function(item) {
      return $scope.editing && $scope.news[$scope.id] == item;
    }

    $scope.newItem = function() {
      var newItem = {title: "New"};
      $scope.news.$add(newItem).then(function(ref) {
        $scope.edit(ref.name());
      });
    };

    $scope.delete = function(id) {
      $scope.news.$remove(id);
    };

    $scope.doneEditing = function() {
      $scope.editing = false;
    };
  });
});
