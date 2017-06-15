//jshint esversion: 6
var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
};

/*
function Policeman() {
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

var policeman = new Policeman();
policeman.greet();

This outputs:

    Hello undefined undefined

because the Person constructor was never run when creating the new Policeman.
Therefore, firstname and lastname are undefined.
*/

function Policeman() {
    // 'super()' to instantiate
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(Policeman, Person);

var policeman = new Policeman();
policeman.greet();
