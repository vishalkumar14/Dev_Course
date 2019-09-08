const http = require("https");

const options = {
  method: "GET",
  hostname: "api.forismatic.com",
  port: 443,
  path: "/api/1.0/?method=getQuote&format=json&lang=en"
};

const request = http.request(options, function(res) {
  let chucks = [];

  res.on("data", function(chuck) {
    chucks.push(chuck);
  });

  res.on("end", function() {
    const JSONObj = JSON.parse(chucks);
    console.log(JSONObj);
  });
});

request.end();
