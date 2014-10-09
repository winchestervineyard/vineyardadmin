define([], function() {
  'use strict';

  return function(key) {
    return function(scope, syncData) {
      syncData(key).$bind(scope, key);

      scope.edit = function(id) {
        scope.id = id;
        if (scope[key][id].published) {
          scope.errorMessage = 'Please unpublish this ' + key + ' before editing.';
          scope.editing = false;
          return;
        }
        scope.editing = true;
        scope.errorMessage = '';
        scope[key][id].edited_at = new Date();
        scope[key][id].id = id;
        scope[key][id].last_edited_by = scope.auth.user.email;
      };

      scope.editingThis = function(item) {
        return scope.editing && scope[key][scope.id] === item;
      };

      scope.newItem = function() {
        var newItem = {title: 'New'};
        scope[key].$add(newItem).then(function(ref) {
          scope.edit(ref.name());
        });
      };

      scope.delete = function(id) {
        scope[key].$remove(id);
      };

      scope.doneEditing = function() {
        scope.editing = false;
      };
    };
  };
});

