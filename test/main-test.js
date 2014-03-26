var tests = [];
for (var file in window.__karma__.files) {
  console.log(file);
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/test\/spec\/.*\.js$/i.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
  paths: {
    jquery: '/base/app/bower_components/jquery/jquery',
    angular: '/base/app/bower_components/angular/angular',
    bootstrap: '/base/app/bower_components/bootstrap/dist/js/bootstrap',
    angularResource: '/base/app/bower_components/angular-resource/angular-resource',
    angularCookies: '/base/app/bower_components/angular-cookies/angular-cookies',
    angularSanitize: '/base/app/bower_components/angular-sanitize/angular-sanitize',
    angularRoute: '/base/app/bower_components/angular-route/angular-route',
    angularMocks: '/base/app/bower_components/angular-mocks/angular-mocks',
    fixtures: '/base/app/test/unit/fixtures'

  },
  baseUrl: '/base/app/scripts',
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularRoute: [ 'angular' ],
    angularResource: [ 'angular' ],
    angularCookies: [ 'angular' ],
    angularSanitize: [ 'angular' ],
    angularMocks: {
      deps: ['angular'],
      exports: 'angular.mock'
    }
  },
  deps: tests,
  callback: window.__karma__.start
});
