var os = require("os");
var fs = require("fs");

var Names = fs.readdirSync("./");

for (var i = 0; i < Names.length; ++i) {
  console.log("---> " + Names[i]);
}

console.log();
