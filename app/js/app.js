'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])

.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {
    templateUrl: 'partials/main.html',
    controller: 'MainController',
    resolve: {'config': 'appConfig'},
  });
  $routeProvider.when('/oauth2callback', {
    templateUrl: 'partials/oauth2callback.html',
    controller: 'OAuth2Controller',
  });
  $routeProvider.otherwise({redirectTo: '/'});
  $httpProvider.interceptors.push('appHttpInterceptor');
}]);

