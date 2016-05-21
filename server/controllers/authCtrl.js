var User = require('../model/userModel.js');

exports.signin = function(req, res) {
  User.findOne({id: req.body.id}, function(err, user) {
    if(err) {
      throw err;
    }
    res.send(user);
  });
};

exports.signup = function(req, res) {
  console.log('reqbody: ' + JSON.stringify(req.body));
  var user = new User ({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err){
    if(err) {
      throw err;
    }
    res.sendStatus(400);
  });
};
