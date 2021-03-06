angular.module('adaApp')

.factory('frontAuthFactory', function ($http, $location, $window) {

  var signin = function (user) {
    console.log('++line 6 inside signup in frontAuthFactory',user);
    return $http({
      method: 'POST',
      url: 'api/auth/signin',
      data: user
    })
      .then(function (resp) {
        console.log('++line 13 inside signin on return', resp.data);
        return resp.data;
      });
  };

  var signup = function (user) {
    console.log('++line 18 inside signup in frontAuthFactory',user);
    return $http({
      method: 'POST',
      url: 'api/auth/signup',
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
