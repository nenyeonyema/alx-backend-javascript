const countStudents = require('./3-1read_file_async');
const http = require('http');
const path = require('path');

const app = http.createServer(async (req, res) => {
  if (req.method == 'GET' && req.url === '/') {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Holberton School!");
  }
  else if (req.method == 'GET' && req.url === '/students') {
    const filename = path.resolve(process.argv[2]);
    try {
      const studentData = await countStudents(filename);
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end(`This is the list of our students\n${studentData}`);
    }
    catch(error) {
      res.writeHead(500, {"Content-Type": "text/plain"});
      res.end(error.message);
    }
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
