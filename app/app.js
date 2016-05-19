var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
  $scope.navItems = [{name: "All Items"}, {name: "New Item"}];
});
//set up controller, inject variables using dollar-scope
app.controller("TodoCtrl", function($scope) {
  $scope.welcome = "hello";
});

