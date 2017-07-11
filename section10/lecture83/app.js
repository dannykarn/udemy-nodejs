var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds153652.mlab.com:53652/addressbook');

// mongoose.Schema lets me describe the structure of a document
var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

// Once I have defined the schema I can, essentially, define a function constructor
// to create mongoose objects that can interact with MongoDB
var Person = mongoose.model('Person', personSchema);

// Then, I can create new instances of the object that follow the structure defined
// in the Schema
var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main Street'
});

// Object returned from this mongoose object will have new methods on it to interact
// with MongoDB

// Save the "Person"
john.save(function(err) {
    if (err) throw err;

    console.log('Person saved!');
});

var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main Street'
});

jane.save(function(err) {
    if (err) throw err;

    console.log('Person saved!');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request URL: ' + req.url);

    // Get all the users
    // The first argument to find, {}, is where one can define the search params
    Person.find({}, function(err, users) {
        if (err) throw err;

        // object of all the users
        console.log(users);
    })

    next();
});

htmlController(app);

apiController(app);

app.listen(port);
