var util = require('util');

var name = 'Danny';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
