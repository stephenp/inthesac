'use strict';

angular
  .module('inthesacApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function($routeProvider) {
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
      .when('/info', {
        controller: 'InfoCtrl',
        templateUrl: 'views/info.html'
      })
      .when('/thanks', {
        controller: 'ThanksCtrl',
        templateUrl: 'views/thanks.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common.Accept = 'application/javascript';
  })
  .run(function($rootScope) {

  });
