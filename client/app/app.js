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
<<<<<<< 0359b4c37da06ea49626ccbd551daa0578211dad
    controller: 'listingsCtrl'
=======
    controller: 'ListingsCtrl as listings'
>>>>>>> [feature] create listings controller and factory
  });

$urlRouterProvider.otherwise('/signin');
});
