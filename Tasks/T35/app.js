// Structuring APP
var express = require('express');
const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');


var app = express();

var port = process.env.port || 3000;


app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine','ejs');

apiController(app);
htmlController(app);


app.listen(port);