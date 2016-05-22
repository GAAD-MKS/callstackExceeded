var Violation = require('../model/violationModel.js');

exports.addListing = function(req, res) {
  var violation = new Violation ({
    locationName: req.body.locationName,
    violation: req.body.violation,
    comment: req.body.comment
  });

  function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response = {};

    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
  }

  var imageBuffer = decodeBase64Image(image);
  console.log(imageBuffer);

  require("fs").writeFile("../client/test.png", new Buffer(image,"base64"), function(err) {
  console.log(err);
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

exports.openListing = function(req, res) {
  Violation.where({ _id: req.body._id }).update({ status: "pending" }, function(err) {
    if (err) {
      console.log(err);
    }
    res.end();
  });
}



