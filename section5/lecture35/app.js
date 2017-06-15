var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

// Create an object, "john", with the "person" prototype
var john = Object.create(person);
// Override the firstname and lastname definitions
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
john.firstname = 'Jane';
john.lastname = 'Doe';

// The greet function is still available to john and jane down the prototype chain
console.log(john.greet());
console.log(jane.greet());
