define([
  'angular',
  'app'
], function(angular, app) {
  'use strict';

  return app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/login', {
      authRequired: false, // if true, must log in before viewing this page
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/news', {
      authRequired: true,
      templateUrl: 'views/news.html',
      controller: 'NewsController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }).run(function($rootScope, $location) {
    var path = function() { return $location.path(); };
    $rootScope.$watch(path, function(newVal, oldVal){
      $rootScope.activetab = newVal;
    });
  });
});
