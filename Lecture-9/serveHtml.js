var http = require("http");
var fs = require("fs");
var myfile = fs.readFileSync("index.html");
var server = http.createServer(function(req, res) {
  console.log(req.url);
  // headers
  res.writeHead(200, { "Content-type": "text/html" });
  // to write response
  res.write(myfile);
  // to finish request and send to client
  res.end();
});
server.listen(3000, function() {
  console.log("Server has started on port 3000");
});
