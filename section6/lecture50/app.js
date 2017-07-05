// fs deals with the file system
var fs = require('fs');

// utf8 is the default encoding and is not necessary to pass to the readFileSync
// function.
// readFileSync is a synchronous approach to reading the file. It will read the
// entire file before advancing to the next line of code.  Ideal for reading
// configuration files and such.
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// readFile is asynchronous.
// readFile takes a callback function as a parameter.
// The callback function will take two parameters: error and data
// This is an example of a popular pattern in Node called error-first callbacks.
// A buffer is returned from the readFile function if an encoding is not passed
// as the second parameter.  Otherwise, it returns a string.
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
    function(err, data) {
        console.log(data);
    });

console.log('Done!');
