const socketClient = require("socket.io-client");

const socket = socketClient.connect("http://localhost:3000");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var UserName = "";

reader.question("Whats Your Name\n", name => {
  const message = `${name} has joined`;
  UserName = name;
  socket.emit("User", message);
});

reader.on("line", function(data) {
  socket.emit("UserMessage", data);
});

socket.on("newclientconnect", function(message) {
  console.log(message);
});

socket.on("BroadcastMessage", function(message) {
  console.log(message);
});

socket.on(`${UserName}`, function(message) {
  console.log(message);
});
