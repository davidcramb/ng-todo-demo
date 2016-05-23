app.controller("ItemListCtrl", function($scope) {
  $scope.items = [];

  $scope.allItem = function() {
    console.log('ALL');
    $scope.showListView = true
  };

});