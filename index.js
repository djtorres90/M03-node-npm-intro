const { createServer } = require('node:http');

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Welcome to Damien Torress Node website!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});