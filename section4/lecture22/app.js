var firstName = 'Jane';

// an "expression" is wrapped in parenthesis
// this is an example of an immediately invoked function expression
(function(lastName) {
  // firstName is scoped to this function, therefore the console log output is still
  // John then Jane
  var firstName = 'John';
  
  console.log(firstName);
  console.log(lastName);
}('Doe'));

console.log(firstName);
