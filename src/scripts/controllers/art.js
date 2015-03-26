'use strict';

/**
 * @ngdoc function
 * @name inthesacApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inthesacApp
 */
angular.module('inthesacApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.title = 'Art';

    $scope.action = 'https://formkeep.com/f/66fc8d855494';

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
