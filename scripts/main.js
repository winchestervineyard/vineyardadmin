require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    jquery: '../../bower_components/jquery/jquery',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    angularCookies: '../../bower_components/angular-cookies/angular-cookies',
    angularSanitize: '../../bower_components/angular-sanitize/angular-sanitize',
    angularRoute: '../../bower_components/angular-route/angular-route',
    angularMocks: '../../bower_components/angular-mocks/angular-mocks',
    angularFire: '../../bower_components/angularfire/angularfire',
    firebase: '../../bower_components/firebase/firebase',
    firebaseSimpleLogin: '../../bower_components/firebase-simple-login/firebase-simple-login',
    moment: '../../bower_components/moment/moment',
    angularBootstrapDatetimepicker: '../../bower_components/angular-bootstrap-datetimepicker/src/js/datetimepicker'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularRoute: [ 'angular' ],
    angularCookies: [ 'angular' ],
    angularSanitize: [ 'angular' ],
    firebaseSimpleLogin: ['firebase'],
    angularFire: [ 'angular', 'firebase'],
    angularBootstrapDatetimepicker: ['angular', 'moment', 'bootstrap'],
    angularMocks: {
      deps: ['angular'],
      exports: 'angular.mock'
    }
  },
  priority: [ 'angular' ]
});

require([
  'angular',
  'app',
  'routes'
], function(angular, app) {
  'use strict';
  angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name]);
  });
});
