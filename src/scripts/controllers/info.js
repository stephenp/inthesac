'use strict';

angular.module('inthesacApp')
  .controller('InfoCtrl', function ($scope, $http, $location) {

    var init = function() {
          $scope.title = 'Information';
          $scope.click = click;
          $scope.state = 'age';
        },

        click = function() {
          $scope.sending = true;

          $http.post('https://formkeep.com/f/7d93b1dbfa4f', {
            age: $scope.age,
            gender: $scope.gender,
            email: $scope.email
          }).success(function() {
            $location.path('/thanks')
          });
        };

    init();

  });
