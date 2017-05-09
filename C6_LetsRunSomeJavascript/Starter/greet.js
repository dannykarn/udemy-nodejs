// function statement
function greet() {
  console.log('hi');
}

greet();

// functions are first-class
function logGreeting(fn) {
  fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
  console.log('Hi Danny!');
}

greetMe();

// It's first-class
logGreeting(greetMe);

// Use a function expression on the fly (aka lamba function)
logGreeting(function() {
  console.log('Hello Danny!');
});
