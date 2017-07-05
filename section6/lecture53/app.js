var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

/*
Read from great.txt.  On every chunk, pipe to gzip.  On every chunk from gzip,
pipe to compressed.

This structure is called chaining.

Node likes it when we work with streams!  Try to use streams whenever we can.

Our first instincts should be asynchronous methods and streams.  It should be an
exception to use synchronous and not streams.
*/
readable.pipe(gzip).pipe(compressed);
