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
        templateUrl: 'views/available.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });