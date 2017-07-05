// Buffer is exposed automatically. No need to use 'require'.
// UTF-8 is the default
var buffer = new Buffer('Hello', 'utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[2]);

buffer.write('wo');
console.log(buffer.toString());
