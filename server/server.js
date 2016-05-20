var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

// routing to static files
app.use(express.static(__dirname + '/../client/'));

// routing to node modules
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

app.listen(port);
console.log('server listening on port: ' + port);
