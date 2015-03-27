'use strict';

angular.module('inthesacApp')
  .controller('FarmCtrl', function ($scope, FormService) {

    var init = function() {
          $scope.title = 'Which is the best Farm-To-Fork spot?';
          $scope.click = click;

          FormService.init($scope);
          FormService.options([
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
          ]);
        },

        click = function() {
          FormService.send({
            url: 'https://formkeep.com/f/129baa1862a3',
            data: { farmtofork: $scope.selected },
            next: '/info'
          });
        };

    init();

  });
