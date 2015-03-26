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

    $scope.title = 'Happy Hour';

    $scope.action = 'https://formkeep.com/f/7088711f4e09';

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
