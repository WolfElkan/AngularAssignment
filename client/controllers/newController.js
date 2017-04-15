app.controller('newController', ['$scope','userFactory','$location', function($scope,userFactory,$location) {
  $scope.addUser = function(){
    var success = userFactory.create($scope.user,function(users) {
      console.log(users)
    })
    if (success) {
      $location.url('/index')
    }
  }
}]);
