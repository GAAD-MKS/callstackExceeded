var Violation = require('../model/violationModel.js');

exports.addListing = function(req, res) {
  var violation = new Violation{
    id: req.body.id,
    createdBy: req.body.createdBy,
    locationName: req.body.locationName,
    violation: req.body.violation,
    comment: req.body.comment,
    geolocation: req.body.geolocation,
    status: { type: String, default: 'pending' },
    timestamps: true
  }

  violation.save(function(err) {
    if(err) {
      throw err;
    }
    res.sendStatus(400);
  });
};

exports.fetchListings = function(req, res) {
  Violation.find({})
  .where('createdBy').equals(req.body.id).exec(function(err, violations) {
    if(err) {
      throw err;
    }
    res.send(violations)
  });
};
