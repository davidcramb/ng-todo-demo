var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "Logout"}, {name: "New Item"} ,{name: "All Items"}];
});
//set up controller, inject variables using dollar-scope
app.controller("TodoCtrl", function($scope) {

  $scope.welcome = "hello";
  $scope.showListView = true;

  $scope.newItem = function(){
    console.log('New Item');
    $scope.showListView = false
  };
  $scope.allItem = function() {
    console.log('ALL');
    $scope.showListView = true
  };





});

