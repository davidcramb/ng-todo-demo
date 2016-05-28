var app = angular.module("TodoApp", ['ngRoute']) //need a .run to deal with unauthenticated users, can't use .constant
  .constant("firebaseURL", "https://dcc-todo-demo.firebaseio.com/"); //creates a variable using the second argument, good for firebase urls//

//not an angular method vv
let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()) {
    console.log('User Authenticated');
    resolve();
  } else {
    console.log('User Not Authenticated. Reject route promise. Execute user and user\'s family');
    reject();
  }
})

//app config is an angular method that runs one time at load of project
//similar formatting to controllers
app.config(function($routeProvider){
  $routeProvider.
    when('/',{
      templateUrl: 'partials/item-list.html',
      controller: "ItemListCtrl",
      resolve: {isAuth}
    }).
    when('/items/list',{
      templateUrl: 'partials/item-list.html',
      controller: "ItemListCtrl",
      resolve: {isAuth}
    }).
    when('/items/new',{
      templateUrl: "partials/item-new.html",
      controller: "ItemNewCtrl",
      resolve: {isAuth}
    }).
    when('/items/:itemId',{ // colon tells angular something will go in there
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl",
      resolve: {isAuth}
    }).
    when('/items/:itemId/edit', {
      templateUrl: 'partials/item-new.html',
      controller: 'ItemEditCtrl',
      resolve: {isAuth}
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl' 
    }).
    when('/logout', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
    otherwise('/');
});

app.run(($location) =>{
  let todoRef = new Firebase("https://dcc-todo-demo.firebaseio.com/");
  //onAuth is a firebase method
  todoRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  })
})
