var authController = require('../controllers/authCtrl.js');

module.exports = function(app) {
  // sign in
  app.post('/signin', authController.signin);

  // sign up
  app.post('/signup', authController.signup);
};
