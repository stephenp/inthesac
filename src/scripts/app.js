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
        controller: 'MainCtrl',
        templateUrl: 'views/main.html'
      })
      .when('/neighborhood', {
        controller: 'NeighborhoodCtrl',
        templateUrl: 'views/form.html'
      })
      .when('/farm', {
        controller: 'FarmCtrl',
        templateUrl: 'views/form.html'
      })
      .when('/happy', {
        controller: 'HappyCtrl',
        templateUrl: 'views/form.html'
      })
      .when('/art', {
        controller: 'ArtCtrl',
        templateUrl: 'views/form.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
