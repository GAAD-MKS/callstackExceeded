var app = require('../server.js');

module.exports = function(app, express) {
  var authRouter = express.Router();
  var listingRouter = express.Router();

  // auth route
  app.use('/api/auth', authRouter);

  // listings route
  app.get('/api/listings', listingRouter);

  require('./authRoute.js')(authRouter);
  require('./listingRoute.js')(listingRouter);
}
