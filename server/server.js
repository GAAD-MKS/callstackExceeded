var express = require('express');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var dbHost ='mongodb://heroku_f2h0fg97:je16b9j3jans4dvbaqpjc2frq9@ds011883.mongolab.com:11883/heroku_f2h0fg97',["adaapp"];
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
