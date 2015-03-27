'use strict';

angular.module('inthesacApp')
  .controller('NeighborhoodCtrl', function ($scope, $http, $timeout, $location) {

    var init = function() {
          resetValues();
          bindActions();
        },

        resetValues = function() {
          $scope.title = 'What is your favorite neighborhood';

          $scope.options = [
            'Old Sac',
            'Downtown Sac',
            'Midtown Sac',
            'R-street Corridor'
          ];
          $scope.selected = null;

          $scope.sending = false;
        },

        bindActions = function() {
          $scope.click = click;
        },

        click = function() {
          $scope.sending = true;

          $timeout(function() {
            $location.path('/happy');
          }, 2000);


          // $http.post('https://formkeep.com/f/7d97bd0b7130',
          //   { neighborhood: $scope.selected }
          //   )
          //   .success(function(data, status, headers, config) {
          //     console.log(arguments);
          //   })
          //   .error(function(data, status, headers, config) {
          //     console.log(arguments);
          //   });
        };

    init();

  });
