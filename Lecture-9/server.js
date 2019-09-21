var http = require("http");

var server = http.createServer(function(req, res) {
  console.log(req.url);
  // headers
  res.writeHead(200, { "Content-type": "text/plain" });
  // 
  if (req.url == "/about") {
    res.write("You are at about page");
    res.end("THE END");
  } else if (req.url == "/" || req.url == "") {
    res.end("You are at home page");
  } else {
    res.end("error 404 Page not found");
  }
});
server.listen(3000, function() {
  console.log("Server has started on port 3000");
});
