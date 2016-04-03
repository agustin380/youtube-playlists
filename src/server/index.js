const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    fs.readFile('./src/server/views/index.html', 'utf8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);
      response.end();
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
