var person = {
  firstName: 'John',
  lastName: 'Doe',
  greet: function() {
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
  }
};

person.greet();

// Can also access the object values with brackets
// Can be useful for dynamically reading through an objects
console.log(person['firstName']);
