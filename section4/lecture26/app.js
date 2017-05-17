// pattern 1
var greet = require('./greet1');
greet();

// pattern 2
var greet2 = require('./greet2').greet;
greet2();

// pattern 3
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// greet3 and greet3b are pointing to the same object
var greet3b = require('./greet3');
greet3b.greet();

// pattern 4
var Greet4 = require('./greet4');
var greeter = new Greet4();
greeter.greet();

// pattern 5
var greet5 = require('./greet5').greet;
greet5();
