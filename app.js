const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('url', req.url);

  if (req.url == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (req.url == '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const win = Math.ceil(Math.random() * 2);
    const resp = {
      winner: win,
    };
    res.end(JSON.stringify(resp));
  }//else if
  else if (req.url == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (req.url == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('ERROR: Cannot find file');
    res.end();
  }
});

server.listen(8000);
