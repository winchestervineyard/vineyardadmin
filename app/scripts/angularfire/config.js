define(['angular'], function(app) {
  'use strict';

  app.module('angularfire.config', []).
  constant('angularFireVersion', '0.6').
  constant('loginRedirectPath', '/login').
  constant('loginProviders', 'password').
  constant('FBURL', 'https://winvin.firebaseio.com');
});
