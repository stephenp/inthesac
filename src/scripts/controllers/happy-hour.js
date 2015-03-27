'use strict';

angular.module('inthesacApp')
  .controller('HappyCtrl', function ($scope, FormService) {

    var init = function() {
          $scope.title = 'Who has the best happy hour';
          $scope.click = click;

          FormService.init($scope);
          FormService.options([
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
          ]);
        },

        click = function() {
          FormService.send({
            url: 'https://formkeep.com/f/7088711f4e09',
            data: { happyhour: $scope.selected },
            next: '/art'
          });
        };

    init();

  });
