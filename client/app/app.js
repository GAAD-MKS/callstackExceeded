var adaApp = angular.module('adaApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('signin', {
    url: '/signin',
    templateUrl: 'app/auth/signin.html',
    // controller: 'frontAuthCtrl.js'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'app/auth/signup.html',
    controller: 'authCtrl'
  })

  .state('listings', {
    url: '/listings',
    templateUrl: 'app/listings/listings.html',
    controller: 'ListingsCtrl as listings'
  });

$urlRouterProvider.otherwise('/signin');
});
