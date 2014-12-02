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
  'angularBootstrapDatetimepicker',
  'directives',
  'controllers',
  'controllers/main',
  'controllers/news',
  'controllers/talks',
  'controllers/hellobar',
  'controllers/login'
], function(angular) {

  'use strict';

  return angular.module('vineyardadminApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap.datetimepicker',
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

