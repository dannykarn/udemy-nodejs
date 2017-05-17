function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

// See console log of the prototype (don't use in production system)
console.log(john.__proto__);
console.log(jane.__proto__);

// Are john and jane instances of the same object
console.log(john.__proto__ === jane.__proto__);
