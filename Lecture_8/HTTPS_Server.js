// This line create a or require a Object of https from the module https
const http = require("https");
const fs = require("fs");
const os = require("os");
const Path = require("path");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  post: 443,
  path: "/users",
  method: "GET"
};

// request method of http is use for listening the http request from the client
// this method is fire or invoke whenever a request is made from client side
const request = http.request(options, function(res) {
  // Data is comes in form of chunks, req.on method start the process of receving the data in the form of chunks

  let wholeData = "";
  res.on("data", function(chunk) {
    wholeData += chunk;
  });

  // receving of Data request finish
  res.on("end", function() {
    const JSONObj = JSON.parse(wholeData);
    console.log(JSONObj);

    if (fs.existsSync("UserData") === false) {
      fs.mkdirSync("UserData");
    } else {
      console.log("Folder Already exits");
    }

    for (let obj = 0; obj < JSONObj.length; ++obj) {
      let name = JSONObj[obj]["username"];
      let cpath = Path.join("UserData", name + ".txt");
      let path = "UserData/" + name + ".json";
      if (fs.existsSync(path) === false) {
        fs.writeFileSync(cpath, JSON.stringify(JSONObj[obj]));
        fs.writeFileSync(path, JSON.stringify(JSONObj[obj]));
      } else {
        console.log("File Already Exists");
      }
    }
  });
});

request.end();
