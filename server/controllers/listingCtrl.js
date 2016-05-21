var Violation = require('../model/violationModel.js');

exports.addListing = function(req, res) {
  var violation = new Violation ({
    locationName: req.body.locationName,
    violation: req.body.violation,
    comment: req.body.comment,
    geolocation: req.body.geolocation,
    status: { type: String, default: 'pending' }
  });

  violation.save(function(err) {
    if(err) {
      throw err;
    }
    res.sendStatus(200);
  });
};

exports.fetchListings = function(req, res) {
  Violation.find({}, function(err, violations) {
    if(err) {
      throw err;
    }
    res.send(violations);
  });
};
