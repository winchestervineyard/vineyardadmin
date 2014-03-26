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
      authRequired: false,
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/news', {
      authRequired: true,
      templateUrl: 'views/news.html',
      controller: 'NewsController'
    })
    .when('/talks', {
      authRequired: true,
      templateUrl: 'views/talks.html',
      controller: 'TalksController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }).run(function($rootScope, $location) {
    var path = function() { return $location.path(); };
    $rootScope.$watch(path, function(newVal){
      $rootScope.activetab = newVal;
    });
  });
});
