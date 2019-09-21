const http = require('http');
const fs = require('fs');

const reader = fs.createReadStream('big.txt');

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-type" : "text/plain"});
    reader.pipe(res);
    
    console.log(Math.floor(process.memoryUsage().external / (1024)) + "kb");
});

server.listen(3000, function(){
    console.log("Server is listening at port 3000");
})