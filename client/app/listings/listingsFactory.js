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

  return {
    fetchListings: fetchListings
  }
}
