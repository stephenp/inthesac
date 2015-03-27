'use strict';

angular.module('inthesacApp')
  .controller('NeighborhoodCtrl', function ($scope, FormService) {

    var init = function() {
          $scope.title = 'Neighborhood';
          $scope.click = click;

          FormService.init($scope);
          FormService.options([
            'Old Sac',
            'Downtown Sac',
            'Midtown Sac',
            'R-street Corridor'
          ]);
        },

        click = function() {
          FormService.send({
            url: 'https://formkeep.com/f/7d97bd0b7130',
            data: { neighborhood: $scope.selected },
            next: '/happy'
          });
        };

    init();

  });
