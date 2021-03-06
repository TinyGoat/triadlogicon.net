var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// Routes
// set routes
app.get('/', function(req, res) {
  res.render('index');
  res.send("Fetching homepage...")
})
app.get('/sponsors/', function(req, res) {
	res.render('sponsors');
})
app.get('/contact/', function(req, res) {
	res.render('contact');
})

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});