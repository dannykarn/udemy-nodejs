// jshint esversion: 6
// The Javascript engine with be pickier with things it lets you do or not do.
'use strict';

var Greeter = require('./greeter');

var greeter1 = new Greeter();

greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Danny');
