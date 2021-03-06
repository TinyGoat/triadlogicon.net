// set variables for environment
var express = require('express');
var app = express();
var path = require('path');
// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs       
// instruct express to server up static assets
app.use(express.static('public'));

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

// Set server port
app.listen(4000);
console.log('Server running on http://localhost:4000');