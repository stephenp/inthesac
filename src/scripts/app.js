'use strict';

/**
 * @ngdoc overview
 * @name inthesacApp
 * @description
 * # inthesacApp
 *
 * Main module of the application.
 */
angular
  .module('inthesacApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
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
