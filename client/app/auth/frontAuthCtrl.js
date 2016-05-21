angular.module('adaApp')

.controller('frontAuthCtrl', function($scope, $window, $location, $state, frontAuthFactory) {
  $scope.user = {};

  $scope.signin = function() {
    console.log('++line 7 inside signin in frontAuthCtrl');
    frontAuthFactory.signin($scope.user)
    .then(function(response) {
      if(response.isValid) {
        $window.localStorage.setItem('com.adaApp', response.token);
        $state.go('eventsHome');
      } else {
        $state.go('signup');
      }
    });
  };

  $scope.signup = function() {
    console.log('++line 20 inside signup in frontAuthCtrl');
    frontAuthFactory.signup($scope.user)
    .then(function(response) {
      if(response.isValid) {
        $window.localStorage.setItem('com.adaApp', response.token);
        $state.go('eventsHome');
      } else {
        $state.go('signin');
      }
    });
  };
});
