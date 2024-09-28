const http = require('http');
const testingSyntax = require('./syntax')
const runtime = require('./runtime')
const logical = require('./logical')


const requestHandler = require('./user');

const server = http.createServer(requestHandler);

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   //testingSyntax();
//   // runtime();
//   logical();
// });

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});