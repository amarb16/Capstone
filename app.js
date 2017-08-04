// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('bower_components'))
app.use(express.static('public'))

var port = process.env.PORT || 8080; // set our port

var mongoose   = require('mongoose');

//img oath
var imgPath = '/public/images';

mongoose.connect('mongodb://localhost/test'); // connect to our database


// ROUTES FOR OUR API
// =============================================================================

// create our router
var ui = express.Router();
var routes = require('./routes/routes.js');

// middleware to use for all requests
ui.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
ui.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', routes);
app.use('/', ui);

app.get('*', function (req,res) {
  res.sendfile('./public/index.html'); //loads the public/index.html file
})

// START THE SERVER
//type node app.js into the terminal
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
