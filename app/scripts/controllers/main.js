'use strict';

/**
 * @ngdoc function
 * @name inthesacApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inthesacApp
 */
angular.module('inthesacApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });