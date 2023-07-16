const http = require('http');

const hostname = '172.17.0.2'; /*Container 01-aoo-node IP Address*/
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request from ", req.socket.remoteAddress);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
