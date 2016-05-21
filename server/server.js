var express = require('express');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var app = express();

if(!process.env.USERNAME) {
  var config = require('./config.js');
}

var mongooseUsername = process.env.USERNAME || config.username;
var mongoosePassword = process.env.PASSWORD || config.password;

var dbHost ='mongodb://' + mongooseUsername + ':' +  mongoosePassword + '@ds025762.mlab.com:25762/ada';

// routing to static files
app.use(express.static(__dirname + '/../client/'));

// routing to node modules
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

mongoose.connect(dbHost);
console.log('Connected to Mongoose');

require('./routes/routes.js')(app, express);

app.listen(port);
console.log('server listening on port: ' + port);
