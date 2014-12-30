'use strict';

/**
 * @ngdoc overview
 * @name fantasyFootballApp
 * @description
 * # fantasyFootballApp
 *
 * Main module of the application.
 */
var fantasyApp = angular
  .module('fantasyFootballApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });