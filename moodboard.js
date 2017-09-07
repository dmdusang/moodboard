var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Set Up Port
app.set('port', process.env.PORT || 3000);


// Middleware to handle static files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());



//Routes
app.get('/', function(res, req){
	res.render('Home');
});