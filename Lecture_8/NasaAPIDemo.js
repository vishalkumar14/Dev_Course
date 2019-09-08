const http = require("https");
const fs = require("fs");
const os = require("os");

const options = {
  hostname: "api.chucknorris.io",
  post: 443,
  path: "/jokes/random",
  method: "GET"
};

const request = http.request(options, function(res) {
  let wholeData = "";
  res.on("data", function(chunk) {
    wholeData += chunk;
  });

  res.on("end", function() {
    const JSONObj = JSON.parse(wholeData);
    console.log(JSONObj);
    let name = "ChuckNorris.txt";
    fs.writeFileSync(name, JSON.stringify(JSONObj.value));
  });
});

request.end();
