const http = require("http");
const socketio = require("socket.io");

const server = http.createServer();

const socketServer = socketio(server);

const UserNames = {};

socketServer.on("connect", function(socket) {
  socket.on("User", function(message) {
    let id = socket.id;
    UserNames.message = id;
    socket.broadcast.emit("newclientconnect", message);
  });
  socket.on("UserMessage", function(message) {
    
  });
});

server.listen(3000, function() {
  console.log("Starting Server at Port 3000");
});
