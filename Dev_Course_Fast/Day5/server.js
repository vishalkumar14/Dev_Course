var fs = require("fs");
var http = require("http");
var modify = require("./functionality/modify");
var url = require("url");

var server = http.createServer();

var server = http.createServer(function(req, res) {
  var parseurl = url.parse(req.url, true);

  if (parseurl.pathname === "/api") {
    res.writeHead(200, { "Content-type": "text/html" });

    var data = JSON.parse(fs.readFileSync("data.json"));
    var file = "" + fs.readFileSync("./templates/product.html");

    var modifyfile = modify(data[parseurl.query.id], file);
    res.write(modifyfile);
  } else if (req.url === "/product") {
    res.write("You are at product page ");
  } else if (req.url === "/overview" || req.url === "/" || req.url === "") {
    res.write("You are at Home Page");
  } else {
    res.write("error 404 Page not found");
  }

  res.end();
});

server.listen(3000, function() {
  console.log("server is at port 3000");
});
