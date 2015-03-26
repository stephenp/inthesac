'use strict';

angular.module('inthesacApp')
  .controller('ArtCtrl', function ($scope) {

    $scope.title = 'Art';

    $scope.action = 'https://formkeep.com/f/66fc8d855494';

    $scope.options = [
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
    ];

  });
