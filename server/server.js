var express = require('express');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var dbHost ='mongodb://heroku_t8btmd26:n94e9q0kskimkj7m58dvjoferk@ds011863.mlab.com:11863/heroku_t8btmd26';
var app = express();

// routing to static files
app.use(express.static(__dirname + '/../client/'));

// routing to node modules
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

mongoose.connect(dbHost);
console.log('Connected to Mongoose');

require('./routes/routes.js')(app, express);

app.listen(port);
console.log('server listening on port: ' + port);
