'use strict';

angular.module('inthesacApp')
  .controller('BaseCtrl', function ($scope, $rootScope) {

    $rootScope.$on('$routeChangeSuccess', function(event, data) {
      $scope.bodyClass = data.originalPath.split('/')[1];
    });

  });
