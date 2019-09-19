const http = require('http');

http.createServer((req, res) => {
    res.write("Hello world 🌏");
    res.end();
}).listen(5959, () => {
    console.log("Server running @ port 5959");
    
})