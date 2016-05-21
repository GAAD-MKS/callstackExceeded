angular.module('adaApp')

.factory('frontAuthFactory', function ($http, $location, $window) {

  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/signin',
      data: user
    })
      .then(function (resp) {
        return resp.data;
      });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/signup',
      data: user
    })
      .then(function (resp) {
        console.log(resp);
        return resp.data;
      });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.adaApp');
  }

  var signout = function () {
    $window.localStorage.removeItem('com.adaApp');
  }

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };

});
