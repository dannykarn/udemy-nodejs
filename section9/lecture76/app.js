var express = require('express');

var app = express();

// Set to environment variable, PORT, if it exists.  Default to 3000.
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

/*

Setting the view engine to the template engine, 'ejs'
    npm install ejs --save

Express will use this template engine for all files with ejs extension.

By default, the express framework will look for the view files in the ./views
folder.

*/
app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);
    next(); // Run the next middleware function
});

app.get('/', function(req, res) {
    /*

    Express will look for a file by the name passed to the render method in
    the views folder with the specified view engine file extension.
    We do not need to specify the file extension.  This makes it easier in the
    event we want to change the view engine and corresponding file extension.

    */
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', {
        ID: req.params.id
    });
});

app.get('/api', function(req, res) {
    res.json({
        firstname: 'John',
        lastname: 'Doe'
    });
});

app.listen(port);
