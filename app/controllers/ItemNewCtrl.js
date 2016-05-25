app.controller("ItemNewCtrl", function($scope, $location, itemStorage){
    $scope.newTask = {
        assignedTo: "",
        dependencies:"",
        dueDate: "",
        isCompleted: false,
        location: "",
        task:"",
        urgency:""
    };
      
    $scope.addNewItem = function(){
        itemStorage.postNewItem($scope.newTask)
            .then(function successCallback(response) {
                console.log(response)
                $location.url("/items/list");
            });
    };
});














// app.controller("ItemNewCtrl", function($scope, $http, $location, itemStorage) {
//   //add properties that we need because of isCompleted and every item needs the same structure as Firebase
//   $scope.newTask = {
//     assignedTo: "",
//     dependencies: "",
//     dueDate: "",
//     isCompleted: false,
//     location: "",
//     task: "",
//     urgency: ""
//   };
//   $scope.items = [];


//   $scope.addNewItem = function() {
//     $http.post('https://dcc-todo-demo.firebaseio.com/items.json', 
//       JSON.stringify({
//       assignedTo: $scope.newTask.assignedTo,
//       dependencies: $scope.newTask.dependencies,
//       dueDate: $scope.newTask.dueDate,
//       isCompleted: false,
//       location: $scope.newTask.location,
//       task: $scope.newTask.task,
//       urgency: $scope.newTask.urgency
//       })
//     ).success(function(response){
//       console.log(response);
//       $location.url("items/list/")
//     })

//     // $scope.newTask.isCompleted = false;
//     // $scope.newTask.id = $scope.items.length;
//     // console.log("you added a new item. I hope you're proud of yourself you monster.", $scope.newTask)
//     // $scope.items.push($scope.newTask);
//     // $scope.newTask= "";
//   };
// });