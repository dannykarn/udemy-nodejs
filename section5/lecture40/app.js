// jshint esversion: 6
// The Javascript engine with be pickier with things it lets you do or not do.
'use strict';

/*
For example, 'use strict' would not allow the following line of code:
      a = 3;
Instead, it requires the use of the var keyword:
      var a = 3;
*/

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

/*
In ES6, we can use the 'class' syntactic sugar.

The 'constructor' keyword can be used to define the constructor function of the
class.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Any methods placed in the class are automatically added to the prototype.

All methods within the class have access to the 'this' variables.

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
};
*/

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ == jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
