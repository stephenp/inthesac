'use strict';

angular.module('inthesacApp')
  .controller('NeighborhoodCtrl', function ($scope) {

    $scope.title = 'Neighborhood';

    $scope.action = 'https://formkeep.com/f/e737368d40bd';

    $scope.options = [
      'Balls',
      'More Balls',
      'So Many Balls'
    ];

  });
