'use strict';

angular.module('inthesacApp')
  .controller('ArtCtrl', function ($scope, FormService) {

    var init = function() {
          $scope.title = 'Art';
          $scope.click = click;

          FormService.init($scope);
          FormService.options([
            'Little Relics',
            'Alex Bult Gallery',
            'Appel Photography Gallery',
            'Art Foundry Gallery',
            'ARTHOUSE on R Gallery & Studios',
            'Axis Gallery',
            'Beatnik Studios',
            'Capital Artworks',
            'Crocker Art',
            'Diversecity Gallery / Showroom',
            'Elliot Fouts Gallery',
            'En Em Art Space',
            'Midtown Arts Collective at Ellis',
            'Sparrow Gallery',
            'Studio 33',
            'The Art Studios (Behind Easy on I Bar & Grill)',
            'The Brickhouse Art Gallery',
            'The Painted Cork',
            'Verge Center for the Arts',
            'Viewpoint Photographic Art Center'
          ]);
        },

        click = function() {
          FormService.send({
            url: 'https://formkeep.com/f/66fc8d855494',
            data: { art: $scope.selected },
            next: '/farm'
          });
        };

    init();

  });
