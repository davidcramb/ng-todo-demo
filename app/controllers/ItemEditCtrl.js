app.controller("ItemEditCtrl", function($scope, $location, itemStorage){
  $scope.newTask = {};
    
  $scope.addNewItem = function(){
    itemStorage.postNewItem($scope.newTask)
      .then(function successCallback(response) {
        console.log(response)
          $location.url("/items/list");
      });
  };
});


