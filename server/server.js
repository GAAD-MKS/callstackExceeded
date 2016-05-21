var express = require('express');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var dbHost ='mongodb://ada:makersquare32@ds025762.mlab.com:25762/ada';
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
