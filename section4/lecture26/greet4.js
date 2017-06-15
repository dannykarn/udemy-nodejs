function Greeter() {
  this.greeting = 'Hello world!!!';
  this.greet = function() {
    console.log(this.greeting);
  };
}

// Give the ability to create the Greeter object, not an instance of the object
module.exports = Greeter;
