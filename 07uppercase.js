var http = require('http');
var u = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(u("Hello World!"));
  res.end();
}).listen(8080);