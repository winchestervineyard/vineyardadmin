define(['angular', 'services'], function(angular) {
  'use strict';

  return angular.module('vineyardadmin.directives', ['vineyardadmin.services'])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm) {
      elm.text(version);
    };
  }]);
});
