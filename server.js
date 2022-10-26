// server.js
const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");   
   response.write("<h2>Ike Wessel  ~ m95p752</h2> <p> Running server on port 3021</p>"); 
   response.end();
}).listen(3021);
