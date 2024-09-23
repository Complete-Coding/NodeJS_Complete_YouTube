const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form method="POST" action="submit-details">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<input type="radio" name="gender" id="male" value="male" />');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" name="gender" id="female" value="female" />');
    res.write('<label for="female">Female</label>');
    res.write('<br><button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  
  } else if (req.url === '/submit-details' &&
             req.method === 'POST') {
    fs.writeFileSync('user.txt', 'Prashant Jain');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});