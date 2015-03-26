'use strict';

angular.module('inthesacApp')
  .controller('FarmCtrl', function ($scope) {

    $scope.title = 'Farm To Fork';

    $scope.action = 'https://formkeep.com/f/e737368d40bd';

    $scope.options = [
      'Blackbird Kitchen + Beer Gallery',
      'Block Butcher Bar',
      'Cap City Squeeze Juice Bar',
      'Ella Dining Room & Bar',
      'Federalist Public House & Beer Garden',
      'Grange Restaurant',
      'Hock Farm Craft & Provisions',
      'Hook & Ladder Manufacturing Co',
      'Kru Contemporary Japanese Cuisine',
      'Magpie Caterers Market & Café',
      'Masullo Pizza',
      'Mother',
      'Mulvaney’s at the B&L',
      'Revolution Wines',
      'Sun & Soil Juice Company',
      'Taylor’s Kitchen',
      'The Press Bistro',
      'The Red Rabbit ',
      'Waterboy Restaurant',
      'The deli at the coop'
    ];

  });
