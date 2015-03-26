'use strict';

angular.module('inthesacApp')
  .controller('HappyCtrl', function ($scope) {

    $scope.title = 'Happy Hour';

    $scope.action = 'https://formkeep.com/f/7088711f4e09';

    $scope.options = [
      '58 degrees and Holding Co',
      'Capital Dime',
      'De Vere’s Irish Pub',
      'Der BierGarten Sacramento',
      'Dive Bar',
      'Ella Dining Room & Bar',
      'Federalist Public House & Beer Garden',
      'Golden Bear',
      'Grange Restaurant',
      'Hock Farm Craft & Provision',
      'Hook & Ladder Manufacturing Co.',
      'House Kitchen & Bar',
      'K Bar',
      'LowBrau Bierhall',
      'Mayahuel – Tequila Museo and Restaurant',
      'Mix Downtown',
      'Pizza Rock',
      'Pour House',
      'Shady Lady Saloon',
      'Streets – formerly Streets of London',
      'The Red Rabbit'
    ];

  });
