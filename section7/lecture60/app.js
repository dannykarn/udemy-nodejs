var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var message = 'Hello world...';

    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    html = html.replace('{Message}', message);

    res.end(html);
}).listen(1337, '127.0.0.1');
