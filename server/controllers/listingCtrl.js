var Violation = require('../model/violationModel.js');

exports.addListing = function(req, res) {
  var violation = new Violation ({
    locationName: req.body.locationName,
    violation: req.body.violation,
    comment: req.body.comment,
    geolocation: req.body.geolocation,
    status: { type: String, default: 'pending' }
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
};
