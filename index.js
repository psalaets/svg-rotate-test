angular.module('app', [])
.controller('MainCtrl', function($scope, $location) {
  var objectNames = ['group', 'big', 'little'];

  // update scope objects when search changes
  $scope.$on('$locationChangeSuccess', function() {
    angular.forEach($location.search(), function(value, key) {
      var object = key.split('.')[0];
      var property = key.split('.')[1];

      if (objectNames.indexOf(object) != -1) {
        $scope[object][property] = Number(value);
      }
    });
  });

  // update search when scope objects change
  objectNames.forEach(function(objectName) {
    var deep = true;
    $scope.$watch(objectName, updateSearchFromObject(objectName), deep);
  });

  function updateSearchFromObject(objectName) {
    return function(newValue) {
      angular.forEach(newValue, function(value, key) {
        $location.search(objectName + '.' + key, value);
      });
    };
  }

  $scope.reset = function() {
    $scope.group = {
      x: 200,
      y: 180,
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
})