'use strict';

angular.module('inthesacApp')
  .service('FormService', function ($http, $location, $timeout) {

    return {
      init: function($scope) {
        this.$scope = $scope;

        this.$scope.sending = false;
      },

      options: function(options) {
        this.$scope.options = options;
        this.$scope.selected = null;
      },

      send: function(options) {
        this.$scope.sending = true;

        $timeout(function() {
          $location.path(options.next);
        }, 1 * 1000);

        // $http.post(options.url, options.data)
        //   .success(function() {
        //     $location.path(options.next)
        //   });

      }
    }

  });
