var http = require("http");
var fs = require("fs");
var json = fs.readFileSync("file.json");
// console.log(json);
// console.log(JSON.parse(json));
json = JSON.parse(json);
// json
var server = http.createServer(function(req, res) {
   console.log(req.url);
  var inputuser = req.url.split("/").pop();
  console.log(inputuser);
  
  var myuser = json.filter(function(user) {
    return user["username"] == inputuser;
  });

  // headers
  res.writeHead(200, { "Content-type": "application/json" });
  res.write(JSON.stringify(myuser));
  res.end();
});
server.listen(3000, function() {
  console.log("Server has started on port 3000");
});
