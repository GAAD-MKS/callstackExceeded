angular.module('adaApp').controller('ListingsCtrl', ListingsCtrl);


function ListingsCtrl($scope, listingsFactory) {
  var vm = this;
  vm.name = "adsf";
  vm.listings = [];

  vm.populateListings = function() {
    listingsFactory.fetchListings()
  }

  vm.populateListings();
}
