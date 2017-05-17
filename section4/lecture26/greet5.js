// the revealing module pattern
// exposing only the properties and methods you want via a returned object
// this is a very common and clean way to structure and protect code within modules
var greeting = 'Hello world!!!!';

function greet() {
  console.log(greeting);
}

module.exports = {
  greet: greet
};
