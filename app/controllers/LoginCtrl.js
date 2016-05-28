"use strict";
app.controller("LoginCtrl", function($scope, $routeParams, $location, firebaseURL, AuthFactory) {
  let ref = new Firebase(firebaseURL);

  $scope.hasUser = false;



  //dummy object
  $scope.account = {
    email: "",
    password: ""
  };

  if($location.path() === '/logout') {
    ref.unauth(); //firebase method - kills authentication token
  }
  $scope.register = () => {
      console.log("register you soul");
      ref.createUser({
        email: $scope.account.email,
        password: $scope.account.password
      }, (error, userData) => {
          if(error){
            console.log(`error creating user: ${error}`)
          } else {
            console.log(`Created User Account with UID: ${userData.uid}`)
            $scope.login();
          }
      });
  };

  $scope.login = () => {
    console.log("login with your...soul?")
    AuthFactory
        .authenticate($scope.account)
        .then(() => {
          $scope.hasUser = true;
          $location.path("/");
          $scope.$apply()
        })


  }
  



})//