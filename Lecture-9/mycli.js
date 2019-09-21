var readline = require("readline");
var mk = require("./StartingNode");
var ip = require("./myipconfig");
var reader = new readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "mycli>"
});

reader.prompt();
console.clear();

reader.on("line", function(data) {
  var command = data.split(" ")[0];
  var parameter = data.split(" ")[1];

  // console.log(command);
  // myipconfig
  if (command == "myipconfig") {
    ip();
  } else if (command == "mymkdir" && parameter != undefined) {
    mk(parameter);
  } else {
    console.log("Wrong Command:(");
  }
  // mymkdir
  //
  // console.log(data);
  reader.prompt();
});

reader.on("close", function() {
  console.log("See you later");
});
