
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

.factory('imageFactor', function($http) {
  
})

.controller('imageController', function($scope, $cordovaCamera, $cordovaFile, $cordovaGeolocation) {

  $scope.data = {};

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
      timeout: 1000,
      enableHighAccuracy: false
    };

    $cordovaGeolocation.getCurrentPosition(posOptions)
      .then(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(lat + ' ' + lng);
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
