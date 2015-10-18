angular.module('app', [])
.controller('MainCtrl', function($scope) {
  $scope.reset = function() {
    $scope.group = {
      x: 100,
      y: 80,
      rotate: 0,
      rx: 0,
      ry: 0,
    };

    $scope.big = {
      x: 0,
      y: 0,
      rotate: 0,
      rx: 0,
      ry: 0,
      width: 50,
      height: 80
    };

    $scope.little = {
      x: 0,
      y: 0,
      rotate: 0,
      rx: 0,
      ry: 0,
      width: 20,
      height: 40
    };
  };

  $scope.reset();
});