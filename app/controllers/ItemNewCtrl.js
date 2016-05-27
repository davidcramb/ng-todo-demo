app.controller("ItemNewCtrl", function($scope, $location, itemStorage){
  $scope.title = "New Item";
  $scope.submitButtonText = "Add New Item";
  $scope.newTask = {};
    
  $scope.addNewItem = function(){
    itemStorage.postNewItem($scope.newTask)
      .then(function successCallback(response) {
        console.log(response)
          $location.url("/items/list");
      });
  };
});


