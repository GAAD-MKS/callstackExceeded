angular.module('adaApp').factory('listingsFactory', listingsFactory);

function listingsFactory($http) {

  function fetchListings() {
    return $http({
      method: 'GET',
      url: 'api/listings/fetchListings'
    }).then(function(res) {
      return res.data;
    })
  }

  function closeListing(item) {
    return $http({
      method: 'PUT',
      url: 'api/listings/closeListing',
      data: item
    }).then(function(res) {
      return res.data;
    })
  }

  function openListing(item) {
    return $http({
      method: 'PUT',
      url: 'api/listings/openListing',
      data: item
    }).then(function(res) {
      return res.data;
    })
  }

  return {
    fetchListings: fetchListings,
    closeListing: closeListing,
    openListing: openListing
  }
}
