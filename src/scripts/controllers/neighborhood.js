'use strict';

angular.module('inthesacApp')
  .controller('NeighborhoodCtrl', function ($scope) {

    $scope.title = 'Neighborhood';

    $scope.action = 'https://formkeep.com/f/7d97bd0b7130';

    $scope.options = [
      'Old Sac',
      'Downtown Sac',
      'Midtown Sac',
      'R-street Corridor'
    ];

  });
