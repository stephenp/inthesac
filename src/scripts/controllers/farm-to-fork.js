'use strict';

/**
 * @ngdoc function
 * @name inthesacApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inthesacApp
 */
angular.module('inthesacApp')
  .controller('FarmCtrl', function ($scope) {

    $scope.title = 'Farm To Fork';

    $scope.action = 'http://localhost:9000/#/art';

    $scope.options = [
      {
        name: 'balls',
        label: 'Balls'
      },
      {
        name: 'more-balls',
        label: 'More Balls'
      },
      {
        name: 'another-balls',
        label: 'Another Balls'
      }
    ];
  });
