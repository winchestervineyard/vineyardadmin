define(['angular', 'services'], function (angular) {
  'use strict';

  return angular.module('vineyardadmin.filters', ['vineyardadmin.services'])
  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
});
