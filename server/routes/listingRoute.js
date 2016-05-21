var listingController = require('../controllers/listingCtrl.js');
var jsonParser = require('body-parser').json();

module.exports = function(app) {
  // add listing
  app.post('/addListing', jsonParser,  listingController.addListing);

  // fetch listings
  app.get('/fetchListings', listingController.fetchListings);
}
