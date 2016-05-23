app.controller("ItemListCtrl", function($scope, $http) {
  $scope.items = [];
  
  $http.get('./data/items.json')
  .success(function(itemObject){
    console.log('item object', itemObject)
  })
});