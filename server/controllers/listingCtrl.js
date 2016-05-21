var Violation = require('../model/violationModel.js');

exports.addListing = function(req, res) {
  var violation = new Violation ({
    locationName: req.body.locationName,
    violation: req.body.violation,
    comment: req.body.comment
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
}


exports.closeListing = function(req, res) {
  Violation.where({ _id: req.body._id }).update({ status: "closed" }, function(err) {
    if (err) {
      console.log(err);
    }
    res.end();
  });
}



