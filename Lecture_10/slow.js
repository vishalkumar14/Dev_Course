const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-type" : "text/plain"});
    const file = fs.readFileSync('big.txt');
    res.write("<h1> Hello World </h1>");
    res.write(file);
    console.log(Math.ceil(process.memoryUsage().external / (1024*1024)) + "mb");
    res.end();
});

server.listen(3000, function(){
    console.log("Server is listening at port 3000");
})