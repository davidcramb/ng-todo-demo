app.controller("ItemViewCtrl", function($scope, $http, $routeParams) { //routeParams allows you to go to the URL and pull variables//
  $scope.items = [];
  $scope.selectedItem = {};
  console.log($routeParams.itemId);

  $http.get('https://dcc-todo-demo.firebaseio.com/items.json')
  .success(function(itemObject){
    var itemCollection = itemObject; //need to push this to array for ng-repeat method || also need to reference key somehow. easiest way is to directly shove id into array    
    Object.keys(itemCollection).forEach(function(key) {
      itemCollection[key].id=key; //find item collection object, pull out thing with key that the loop is on, set ID = key//
    $scope.items.push(itemCollection[key]); //adds ID key with a value of the ID the object, eventually will add firebase ID

    $scope.selectedItem = $scope.items.filter(function(item){ 
        return item.id === $routeParams.itemId;
    })[0];


    });
  });

});
// FILTER METHOD
// var itemCollection = itemObject; //need to push this to array for ng-repeat method || also need to reference key somehow. easiest way is to directly shove id into array    
//     Object.keys(itemCollection).forEach(function(key) {
//       itemCollection[key].id=key; //find item collection object, pull out thing with key that the loop is on, set ID = key//
//     $scope.items.push(itemCollection[key]); //adds ID key with a value of the ID the object, eventually will add firebase ID

//     $scope.selectedItem = $scope.items.filter(function(item){ 
//         return item.id === $routeParams.itemId;
//     })[0]; 