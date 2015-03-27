'use strict';

angular.module('inthesacApp')
  .controller('InfoCtrl', function ($scope) {

    var init = function() {
          $scope.title = 'Information';
          $scope.click = click;
          $scope.state = 'age'
        },

        click = function() {

        };

    init();

  });
