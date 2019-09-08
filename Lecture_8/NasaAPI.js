const http = require("https");
const fs = require("fs");
const os = require("os");

const Stream = require('stream').Transform;

const options = {
  hostname: "api.nasa.gov",
  post: 443,
  path: "/planetary/apod?api_key=DEMO_KEY&&date=2019-02-02&&hd=false",
  method: "GET"
};

const request = http.request(options, function(res) {
  let wholeData = "";
  res.on("data", function(chunk) {
    wholeData += chunk;
  });

  res.on("end", function() {
    const JSONObj = JSON.parse(wholeData);
    console.log(JSONObj)

    let url = JSONObj.url;

    const UrlReq = http.get(url, resp => {
        var data = new Stream();   

      resp.on("data", chunk => {
        data.push(chunk);
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        fs.writeFileSync("NasaImage2.jpg", data.read());
      });

    });

    UrlReq.end();


  });

});

request.end();
