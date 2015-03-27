'use strict';

angular.module('inthesacApp')
  .service('FormService', function ($http, $location, $timeout) {

    return {
      init: function($scope) {
        this.$scope = $scope;

        this.$scope.sending = false;
        this.$scope.confirm = 'Confirm'
      },

      options: function(options) {
        this.$scope.options = options;
        this.$scope.selected = null;
      },

      send: function(options) {
        this.$scope.confirm = 'Sending...';

        $http.post(options.url, options.data)
          .success(function() {
            $location.path(options.next)
          })
          .error(function() {
            $location.path(options.next)
          });

      }
    }

  });
