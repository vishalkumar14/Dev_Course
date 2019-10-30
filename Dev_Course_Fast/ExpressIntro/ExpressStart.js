const fs = require("fs");

const express = require("express");
const server = express();

var users = fs.readFileSync("./data/user.json");

users = JSON.parse(users);

var user = users[0];

server.use(express.json());

server.get("/", function(req, res) {
  res.status(201).json({
    name: "Vishal",
    skill: "HTML CSS"
  });
});

server.get("/api/users/1", function(req, res) {
  res.status(200).json(user);
});

server.patch("/api/users/1", function(req, res) {
  var obj = req.body;
  var keys = Object.keys(obj);
  var key = keys[0];
  user[key] = obj[key];
  fs.writeFileSync("./data/user.json", JSON.stringify(users));
  res.status.apply(201).json(user);
});

server.listen(3000, function() {
  console.log("Server is listening ar port 3000");
});
