angular.module('adaApp').controller('ListingsCtrl', ListingsCtrl);


function ListingsCtrl($scope, listingsFactory) {
  var vm = this;
  vm.violations = [];

  vm.populateListings = function() {
    listingsFactory.fetchListings().then(function(res) {
      res.forEach(function(item) {
        console.log(item)
        item.createdAt = moment(item.createdAt).format('MMMM Do, YYYY');
        item.updatedAt = moment(item.updatedAt).format('MMMM Do, YYYY');
        vm.violations.push(item);
      })
    })
  }

  vm.closeListing = function(item) {
    listingsFactory.closeListing(item).then(function(res) {
      item.status = "closed"
    })
  }

  vm.openListing = function(item) {
    listingsFactory.openListing(item).then(function(res) {
      item.status = "open"
    })
  }

  vm.populateListings();
}
