const socketClient = require("socket.io-client");

const socket = socketClient.connect("http://localhost:3000");

const readline = require("readline");

var UserName = "";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("Whats Your Name\n", function(name){
  UserName = name;
  const message = `${name} has joined`;
  socket.emit("User", message);
});

reader.on("line", function(data) {

let sarr = data.split(" ");

let kind = sarr[0];

let message = [];

if(kind === "private"){

    let reciever = sarr[1];
    message.data = `${username} : ${sarr.slice(2).join(" ")}`;
    message.kind = "private";
    

}

  socket.emit("UserMessage", data);
});

socket.on("newclientconnect", function(message) {
  console.log(message);
});
socket.on("BroadcastMessage", function(message) {
  console.log(message);
});
socket.on(UserName,function(message){
    console.log(message);
})
