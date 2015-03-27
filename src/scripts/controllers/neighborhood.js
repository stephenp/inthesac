'use strict';

angular.module('inthesacApp')
  .controller('NeighborhoodCtrl', function ($scope) {

    var url = 'https://formkeep.com/f/7d97bd0b7130',

        init = function() {
          initValues();
          bindActions();
        },

        initValues = function() {
          $scope.title = 'Neighborhood';
          $scope.confirm = 'Confirm';

          $scope.options = [
            'Old Sac',
            'Downtown Sac',
            'Midtown Sac',
            'R-street Corridor'
          ];

          $scope.selected = null;
        },

        bindActions = function() {
          $scope.click = function() {
            console.log($scope.selected);
          };

          $scope.disabled = function() {
            return true;
          };
        };

    init();

  });
