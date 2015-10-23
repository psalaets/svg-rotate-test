angular.module('app', [])
.controller('MainCtrl', function($scope) {
  // assumes object has number props: rotate, rx, ry, x, y
  $scope.makeTransform = function makeTransform(object) {
    return makeTranslate(object.x, object.y) + ' ' + makeRotate(object.rotate, object.rx, object.ry);
  };

  function makeTranslate(x, y) {
    x = x || 0;
    y = y || 0;

    return 'translate(' + x + ' ' + y + ')';
  }

  function makeRotate(rotate, rx, ry) {
    rotate = rotate || 0;
    rx = rx || 0;
    ry = ry || 0;

    return 'rotate(' + rotate + ' ' + rx + ' ' + ry + ')';
  }

  $scope.reset = function reset() {
    $scope.group = {
      x: 100,
      y: 80,
      rotate: 0,
      rx: 294,
      ry: 224,
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
      rx: 294,
      ry: 224,
      width: 20,
      height: 40
    };
  };

  $scope.reset();
})