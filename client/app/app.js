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
});
