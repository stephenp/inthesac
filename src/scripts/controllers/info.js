'use strict';

angular.module('inthesacApp')
  .controller('InfoCtrl', function ($scope, $http, $location) {

    var init = function() {
          $scope.title = 'Tell us about yourself!';
          $scope.click = click;
          $scope.state = 'age';
        },

        click = function() {
          $scope.sending = true;

          $http.post('https://formkeep.com/f/129baa1862a3', {
            age: $scope.age,
            gender: $scope.gender,
            email: $scope.email
          }).success(function() {
            $location.path('/thanks')
          });
        };

    init();

  });
