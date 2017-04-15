/*
  Our factory: This is going to control all of our data.
  Modularize into a folder called: 'factories' within 'client'
*/
app.factory('userFactory', [function() {
  /* Our factory is going to provide the methods to gather user data from a RESTful API
        (we aren't quite there yet, but that's where we are going!)
      Index: return all users
      Show: return one user based on an a unique selector(often id)
      Create: generate a new user
      Update: update a specific user
      Delete: remove a specific user

      Our controller is going to determine what happens once we complete the change in the dataset using a callback function.
      These are denoted below, for clarity as: callback **Method**

      Bonus: convert these callbacks to promises!
  */
  function UserConstructor() {

    var users = [{
      name: "mike"
    }];

    this.index = function(callbackIndex) {
      if (typeof(callbackIndex) === 'function') {
        callbackIndex(users);
      }
    };
    /*
      Creates a newUser by pushing the newUser argument into the users array
      then runs the callback to return the updated array to controllers
    */
    this.create = function(newUser, callbackCreate) {
      var success = false
      if (typeof(newUser) === 'object') {
        users.push(newUser)
        success = true
      }
      if (typeof(callbackCreate) === 'function') {
        callbackCreate(users);
      }
      return success
    };
    /* perhaps a comment here about what this does would help us understand it! */
    this.update = function(updateUser, index, callbackUpdate) {
      if (users[index]) {
        for (var key in updateUser) {
          users[index][key] = updateUser[key];
        }
      }
      if (typeof(callbackUpdate) === 'function') {
        callbackUpdate(users[index]);
      }
    }
    this.show = function(index, callbackShow) {
      if (typeof(callbackShow) === 'function') {
        callbackShow(users[index]);
      }
    }
    this.delete = function(index, callbackDelete) {
      if (users[index]) {
        users.splice(index, 1);
      }
      if (typeof(callbackDelete) === 'function') {
        callbackDelete(users);
      }
    }
  }
  /*
    What is this factory returning?  Could we extend this code to be reused?
  */
  return (new UserConstructor());
}]);
