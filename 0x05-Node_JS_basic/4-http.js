const http = require('http');
const app = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end("Hello Holberton School!");
});

app.listen(1245);