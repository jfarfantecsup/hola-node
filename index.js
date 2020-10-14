var http = require('http');

function callback_createServer(request, response) {
   response.writeHead(200);
   response.write('<H1> Bienvenido a Node </H1>');
   response.end();
}

var server = http.createServer(callback_createServer);

server.listen(8000);
