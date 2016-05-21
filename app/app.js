var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"}, {name: "New Item"} ,{name: "All Items"}];
});
//set up controller, inject variables using dollar-scope
app.controller("TodoCtrl", function($scope) {

  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.newTask = {};
  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "greg",
      location: "home",
      urgency: "low",
      dependencies: "wifi, tissues, vodka"
    },
    {
      id: 1,
      task: "grade quizzes zoe",
      isCompleted: false,
      dueDate: "12/5/16",
      assignedTo: "Joe",
      location: "NSS",
      urgency: "high",
      dependencies: "sunshine, clippers, hat, water, headphones"
    },
    {
      id: 2,
      task: "take a nap",
      isCompleted: false,
      dueDate: "5/21/16",
      assignedTo: "zoe",
      location: "Zoe's House",
      urgency: "medium",
      dependencies: "hammock, cat, pillow, blanket"
    }
  ];

  $scope.newItem = function(){
    console.log('New Item');
    $scope.showListView = false
  };
  $scope.allItem = function() {
    console.log('ALL');
    $scope.showListView = true
  };

  $scope.addNewItem = function() {
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    console.log("you added a new item. I hope you're proud of yourself you monster.", $scope.newTask)
    $scope.items.push($scope.newTask);
    $scope.newTask= "";
  };




});

