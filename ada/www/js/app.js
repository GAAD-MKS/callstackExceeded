
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('imageFactory', function($http) {
  reportViolation = function(data) {
    console.log('inside factory', data);
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/api/listings/addListing',
      data: data
    }).then(function(res) {
      console.log(res);
    })
  }
  return {
    reportViolation: reportViolation
  }
})

.controller('imageController', function($scope, $cordovaCamera, $cordovaFile, $cordovaGeolocation, imageFactory) {

  $scope.data = {};

  $scope.reportViolation = function() {
    console.log($scope.data);
    imageFactory.reportViolation($scope.data);
  }

  $scope.takePicture = function() {
    var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    var posOptions = {
      timeout: 20000,
      enableHighAccuracy: false
    };

    $cordovaGeolocation.getCurrentPosition(posOptions)
      .then(function(position) {
        $scope.data.geolocation = {};
        $scope.data.geolocation.lat = position.coords.latitude;
        $scope.data.geolocation.lng = position.coords.longitude;
        console.log($scope.data.geolocation.lat + ' ' + $scope.data.geolocation.lng);
      }, function(err) {
        console.log(err);
      });

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.data.imgURI = 'data:image/jpeg;base64,' + imageData;
    }, function(err) {
      console.log(err);
    });
  };
})
