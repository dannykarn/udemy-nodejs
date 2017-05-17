// In Javascript, primitives are passed by value and objects are passed by
// reference.

// pass by value
function change(b) {
  b = 2;
}

var a = 1;
change(a);

// a is a primitive so it is not modified by the change function
// a is passed by value
console.log(a);

// pass by reference
function changeObject(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObject(c);

// c is an object so it is modified by the change function
// c is passed by reference
console.log(c);
