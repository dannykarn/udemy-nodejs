var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    // Run the function constructor and pass the newly created object
    // This is equivalent to 'super()'
    // This ensures my Greeter object has access to everything the EventEmitter
    // object has
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

// Any objects created from Greeter should also have access to the methods and
// properties on the prototype property of EventEmitter
util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
};

var greeter1 = new Greeter();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Danny');
