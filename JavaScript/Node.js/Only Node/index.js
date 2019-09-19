// const Person = require('./person');
// const Logger = require("./logger")
// const logger = new Logger();
// const person1 = new Person('Ragland', 30);

// person1.greeting();

// logger.on('message', (data) => {
//     console.log("\n\nCalled listener " + JSON.stringify(data));

// });

// logger.log("Hello world")

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(`${req.url} <== req.url\n\n`);

  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (req.url === "/about") {
    fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});

const PORT = process.env.PORT || 5050;

server.listen(PORT, () => {
  console.log(`Server listening @ port ${PORT}  \n\n`);
});
