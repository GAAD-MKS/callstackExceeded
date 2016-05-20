var listingController = require('../controllers/listingCtrl.js');

module.exports = function(app) {
  // add listing
  app.post('/addListing', listingController.addListing);

  // fetch listings
  app.get('/fetchListings', listingController.fetchListings);
}
