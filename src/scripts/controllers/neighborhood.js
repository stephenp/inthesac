'use strict';

angular.module('inthesacApp')
  .controller('NeighborhoodCtrl', function ($scope, $http) {

    var init = function() {
          resetValues();
          bindActions();
        },

        resetValues = function() {
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
          $scope.click = click;
          $scope.disabled = disabled;
        },

        click = function() {
          console.log('hi');

          $http.post('https://formkeep.com/f/7d97bd0b7130')
            .success(function(data, status, headers, config) {
              console.log(arguments);
            })
            .error(function(data, status, headers, config) {
              console.log(arguments);
            });
        },

        disabled = function() {
          return true;
        };

    init();

  });
