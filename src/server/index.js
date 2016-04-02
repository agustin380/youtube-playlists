var http = require('http');

http.createServer(function(request, response) {
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
