angular.module('adaApp')

.controller('frontAuthCtrl', function($scope, $window, $location, $state, frontAuthFactory) {
  $scope.user = {};

  // authenticates by checking if there is a token
  $scope.isAuth = function(){
    return Boolean($window.localStorage.getItem('com.adaApp'));
  };

  $scope.signin = function() {
    console.log('++line 12 inside signin in frontAuthCtrl');
    frontAuthFactory.signin($scope.user)
    .then(function(response) {
      if(response) {
        $window.localStorage.setItem('com.adaApp', response);
        $state.go('listings');
      } else {
        swal("Oops...", "Username or password is incorrect", "error");
      }
    });
  };

  $scope.signup = function() {
    console.log('++line 25 inside signup in frontAuthCtrl');
    frontAuthFactory.signup($scope.user)
    .then(function(response) {
      if(response === false) {
        swal('Username exists', 'Please choose another username.','error');
      } else {
        $window.localStorage.setItem('com.adaApp', response);
        $state.go('listings');
      }
    });
  };

  $scope.signupRedirect = function() {
    $state.go("signup");
  }

  // removes token when logout is clicked
  $scope.signout = function(){
    $window.localStorage.removeItem('com.adaApp');
    $state.go('signin');
  };
});
