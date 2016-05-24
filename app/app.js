var app = angular.module("TodoApp", ['ngRoute']);

//app config is an angular method that runs one time at load of project
//similar formatting to controllers
app.config(function($routeProvider){
  $routeProvider.
    when('/items/list',{
      templateUrl: 'partials/item-list.html',
      controller: "ItemListCtrl"
    }).
    when('/items/new',{
      templateUrl: "partials/item-new.html",
      controller: "ItemNewCtrl"
    }).
    when('/items/:itemId',{ // colon tells angular something will go in there
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl"
    }).
    otherwise('/items/list');
})


