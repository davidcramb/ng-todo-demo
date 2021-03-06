//factory should be the only part of app that talks to Firebase. Helps keep up with scope in case URL(s) change and prevent repetition
'use strict';
app.factory("itemStorage", function($q, $http, AuthFactory, firebaseURL){ //$q is a directive that handles promises

  
  var getItemList = function(){
    let items = [];
    let user = AuthFactory.getUser();
    return $q(function(resolve, reject){ //promise to queue up so javascript can work asynchronously//
      $http.get(`${firebaseURL}items.json?orderBy="uid"&equalTo="${user.uid}"`) //? is query paramater
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
              .delete(firebaseURL + `/items/${itemId}.json`)
              .success(function(objectFromFirebase){
                resolve(objectFromFirebase)
              });
    });
  };

  var postNewItem = function(newItem){
    let user = AuthFactory.getUser();
    console.log(user)
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "/items.json",
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency,
                    uid: user.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
  };

  var getSingleItem = function(itemId){
    return $q(function(resolve, reject){
      $http.get(firebaseURL + "items/" + itemId + ".json")
        .success(function(itemObject){
          resolve(itemObject);
        })
        .error(function(error){
          reject(error);
        });
    });
  }

  var updateItem = function(itemId, newItem){
      return $q(function(resolve, reject) {
          $http.put(
              firebaseURL + "/items/" +itemId + ".json",
              JSON.stringify({
                  assignedTo: newItem.assignedTo,
                  dependencies: newItem.dependencies,
                  dueDate: newItem.dueDate,
                  isCompleted: newItem.isCompleted,
                  location: newItem.location,
                  task: newItem.task,
                  urgency: newItem.urgency,
                  uid: user.uid
              })
          )
          .success(
              function(objectFromFirebase) {
                  resolve(objectFromFirebase);
              }
          );
      });
  };

  var updateCompletedStatus = function(newItem){
    return $q(function(resolve, reject) {
        $http.put(
            firebaseURL + "/items/" +newItem.id + ".json",
            JSON.stringify({
                assignedTo: newItem.assignedTo,
                dependencies: newItem.dependencies,
                dueDate: newItem.dueDate,
                isCompleted: newItem.isCompleted,
                location: newItem.location,
                task: newItem.task,
                urgency: newItem.urgency,
                uid: user.uid
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
  return {updateCompletedStatus:updateCompletedStatus, updateItem: updateItem, getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem, getSingleItem:getSingleItem}

})