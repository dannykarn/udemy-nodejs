// Initializing the ArrayBuffer to hold 8 bytes of data.
var buffer = new ArrayBuffer(8);

// Give us a way to "deal" with the binary data stored in buffer.
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
/*
The buffer does not have the space to store a third number so it is ignored.
view[2] = 30;
*/
console.log(view);

// ES6 introduced ways for Javascript to better handle binary data.
// This is not the way Node handles binary data.
