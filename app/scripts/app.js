define([
  'angular',
  'angularRoute',
  'angularCookies',
  'angularSanitize',
  'firebaseSimpleLogin',
  'angularfire/config',
  'angularfire/routesecurity',
  'angularfire/simpleLoginTools',
  'angularFire',
  'services/firebase',
  'services/login',
  'filters',
  'directives',
  'controllers',
  'controllers/main',
  'controllers/login'
], function(angular) {

  'use strict';

  return angular.module('vineyardadminApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'angularfire.routesecurity',
    'angularfire.login',
    'angularfire.config',
    'angularfire.simpleLoginTools',
    'vineyardadmin.controllers',
    'vineyardadmin.services',
    'vineyardadmin.filters',
    'vineyardadmin.directives'
  ]);
});

