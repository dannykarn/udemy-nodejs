// object properties and methods
var obj = {
    greet: 'Hello'
};

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];

// functions can be added to arrays in JavaScript because they are first class
arr.push(function() {
    console.log('Hello world 1.');
});
arr.push(function() {
    console.log('Hello world 2.');
});
arr.push(function() {
    console.log('Hello world 3.');
});

arr.forEach(function(item) {
    item();
});
