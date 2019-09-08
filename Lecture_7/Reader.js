const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Vishal_Prompt>>> "
});

reader.prompt();

reader.on("line", function(data) {
  console.log("Did You Said ---> " + data);
  reader.prompt();
});
reader.on("close", function(data) {
  console.log();
  console.log("Thank You Using For Using Prompt");
});
