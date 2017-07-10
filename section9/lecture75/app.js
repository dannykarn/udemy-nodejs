var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

// Set to environment variable, PORT, if it exists.  Default to 3000.
var port = process.env.PORT || 3000;

app.use(cookieParser());

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next(); // Run the next middleware function
});

app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');

    console.log('Cookies: ', req.cookies);
    console.log('Signed cookies: ', req.signedCookies);
});

app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id +
        '</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });
});

app.listen(port);
