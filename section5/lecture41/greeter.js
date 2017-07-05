// jshint esversion: 6
// The Javascript engine with be pickier with things it lets you do or not do.
'use strict';

var EventEmitter = require('events');

// Export the class with a class expression.
module.exports = class Greeter extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
};

/*
Can also export the module via the following syntax:
    module.exports = Greeter;
*/

/*
function Greeter() {
    this.greeting = 'Hello world!';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
};
*/
