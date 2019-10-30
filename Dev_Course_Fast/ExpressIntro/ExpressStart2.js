const express = require("express");

const app = express();
app.use(express.json());

//It will run on any routes
app.use(function(req, res, next) {
  const data = "Request Processed Successfully";
  //   res.status(200).json({
  //     status: "successfull",
  //     data
  //   });

  var key = Object.keys(req.body)[0];
  console.log(req.body);

  if (req.body[key] == "Vishal") {
    req.name = "Vishal";
  }

  req.myproperty = "I have modified the request";
  next();
});

// For handling POST Requests
app.post("/", function(req, res, next) {
    const data = "Request Processed Successfully";
    console.log(req.name);
    res.status(200).json({
      status: "successfull",
      data
    });
  });

// For handling GET Requests
app.get("/", function(req, res, next) {
  const data = "Request Processed Successfully";
  res.status(200).json({
    status: "successfull",
    data
  });
});


app.listen(3000, function() {
  console.log("Server is running at port 3000");
});
