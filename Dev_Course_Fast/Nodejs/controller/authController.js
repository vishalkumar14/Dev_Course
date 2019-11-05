const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const secret = "mysecret";

module.exports.signup = async function(req, res) {
  const user = await userModel.create(req.body);
  const id = user["_id"];
  const token = await jwt.sign({ id }, secret);
  res.status(201).json({
    success: "User Created",
    user,
    token
  });
};

module.exports.login = async function(req, res, next) {
  try {
    const user = await userModel.find({
      uname: req.body.uname
    });
    if (
      user[0].password !== undefined &&
      user[0].password === req.body.password
    ) {
      console.log(req.body);
      res.status(200).redirect("/");
    } else {
      res.status(200).redirect("/login");
    }
  } catch {
    res.status(200).redirect("/login");
  }
};

module.exports.protectroute = async function(req, res, next) {
  try {
    if (req.headers.authorization) {
      const userToken = req.headers.authorization.split(" ")[1];
      const token = await jwt.verify(userToken, secret);
      if (token) {
        req.decoded = token["id"];
        req.user = await userModel.findById(req.decoded);
        req.roleType = req.user["role"];
        next();
      } else {
        res.status(401).json({
          data: "Something went Wrong please login again"
        });
      }
    } else {
      res.status(200).redirect("/login");
    }
  } catch {
    res.status(404).json({
      data: "Error 404!!!"
    });
  }
};
module.exports.isLoggedIn = async function(req, res, next) {
  try {
    if (req.headers.authorization) {
      const userToken = req.headers.authorization.split(" ")[1];
      const token = await jwt.verify(userToken, secret);
      if (token === true) {
        next();
      } else {
        res.status(200).redirect("/login");
      }
    } else {
      res.status(200).redirect("/login");
    }
  } catch {
    res.status(404).json({
      data: "Error 404!!!"
    });
  }
};
module.exports.isAuthorised = roles => {
  return function(req, res, next) {
    try {
      if (roles.includes(req.roleType)) {
        next();
      } else {
        res.status(401).json({
          data: "You are not Authorised"
        });
      }
    } catch (err) {
      res.status(404).json({
        data: err
      });
    }
  };
};
