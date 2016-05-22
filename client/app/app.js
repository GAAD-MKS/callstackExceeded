var adaApp = angular.module('adaApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('signin', {
    url: '/signin',
    templateUrl: 'app/auth/signin.html',
    controller: 'frontAuthCtrl',
    authenticate: false,
    signedin: false
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'app/auth/signup.html',
    controller: 'frontAuthCtrl',
    authenticate: false,
    signedin: false
  })

  .state('listings', {
    url: '/listings',
    templateUrl: 'app/listings/listings.html',
    controller: 'ListingsCtrl as listings',
    authenticate: true,
    signedin: false
  });

$urlRouterProvider.otherwise('/signin');
$httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.adaapp');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      return object;
    }
  };
  return attach;
})

.run(function ($rootScope, $state, $location, frontAuthFactory) {
  $rootScope.url = "http://localhost:3000";
  $rootScope.$on('$stateChangeStart', function (e, toState) {
    if (toState.authenticate && !frontAuthFactory.isAuth()) {
      e.preventDefault();
      $state.go('signin');
    }
    if(!toState.authenticate && frontAuthFactory.isAuth()) {
      e.preventDefault();
      $state.go('listings');
    }
  });
});