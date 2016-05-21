angular.module('adaApp')

.controller('frontAuthCtrl', function($scope, $window, $location, $state, frontAuthFactory) {
  $scope.user = {};

  $scope.signin = function() {
    logFact.signin($scope.user)
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
    console.log('++line 19 inside signup in frontAuthCtrl');
    logFact.signup($scope.user)
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
