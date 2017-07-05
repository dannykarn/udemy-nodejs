var fs = require('fs');

// 'highWaterMark' specifies the size of the buffer in bytes.
var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 1 * 1024
});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// The event emitted from a ReadStream is 'data'.  This can be found in the
// documentation.  The event is emitted when the buffer becomes full and the
// contents of the buffer are passed to the listener function.
// A filestream is by default 64KB
readable.on('data', function(chunk) {
    console.log(chunk);
    //console.log('Buffer size = ' + chunk.length);
    writable.write(chunk);
});
