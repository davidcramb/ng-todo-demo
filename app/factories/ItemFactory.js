//factory should be the only part of app that talks to Firebase. Helps keep up with scope in case URL(s) change and prevent repetition
'use strict';
app.factory("itemStorage", function($q, $http){ //$q is a directive that handles promises

  
  var getItemList = function(){
    let items = [];
    return $q(function(resolve, reject){ //promise to queue up so javascript can work asynchronously//
      $http.get("https://dcc-todo-demo.firebaseio.com/items.json")
        .success(function(itemObject){
          console.log(itemObject)
          var itemCollection = itemObject;
          Object.keys(itemCollection).forEach(function(key){
            itemCollection[key].id=key;
            items.push(itemCollection[key]);
          })
          resolve(items);
          console.log(items)
        })
        .error(function(error){
          reject(error);
        });
    })
  };

  var deleteItem = function(itemId){
    return $q(function(resolve, reject){
          $http
              .delete(`https://dcc-todo-demo.firebaseio.com/items/${itemId}.json`)
              .success(function(objectFromFirebase){
                resolve(objectFromFirebase)
              });
    });
  };

  var postNewItem = function(newItem){
        return $q(function(resolve, reject) {
            $http.post(
                "https://dcc-todo-demo.firebaseio.com/items.json",
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
  };

  //makes these available outside of the ItemFactory
  return {getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem}

})