var authController = require('../controllers/authCtrl.js');
var jsonParser = require('body-parser').json();


module.exports = function(app) {
  app.use(jsonParser);

  // sign in
  app.post('/signin', jsonParser, authController.signin);

  // sign up
  app.post('/signup', jsonParser, authController.signup);
};
