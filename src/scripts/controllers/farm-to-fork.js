'use strict';

angular.module('inthesacApp')
  .controller('FarmCtrl', function ($scope) {

    $scope.title = 'Farm To Fork';

    $scope.action = 'https://formkeep.com/f/e737368d40bd';

    $scope.options = [
      'Balls',
      'More Balls',
      'So Many Balls'
    ];

  });
