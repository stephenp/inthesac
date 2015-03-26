'use strict';

angular.module('inthesacApp')
  .controller('ArtCtrl', function ($scope) {

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
