app.controller("ItemNewCtrl", function($scope) {
  $scope.newTask = {};
  $scope.items = [];


  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    console.log("you added a new item. I hope you're proud of yourself you monster.", $scope.newTask)
    $scope.items.push($scope.newTask);
    $scope.newTask= "";
  };
});