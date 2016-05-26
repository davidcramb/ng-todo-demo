var app = angular.module("TodoApp", ['ngRoute'])
  .constant("firebaseURL", "https://dcc-todo-demo.firebaseio.com/"); //creates a variable using the second argument, good for firebase urls//

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
    when('/items/:itemId/edit', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemEditCtrl'
    }).
    otherwise('/items/list');
});


