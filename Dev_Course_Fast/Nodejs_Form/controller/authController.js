const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const secret = "mysecret";
const EmailSender = require("../utils/email");

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
module.exports.updatePassword = async (req, res, next) => {
  try {
    if (req.body.password && req.body.newpassword && req.body.confirmpassword) {
      if (req.body.oldpassword === req.user.password) {
        user.password = req.body.newpassword;
        user.confirmpassword = req.body.newpasswordconfirm;
        await user.save();
      } else {
        res.status(401).json({
          data: "Password not matched"
        });
      }
    }
  } catch {
    res.status.json({
      data: "Invaild Password"
    });
  }
};
module.exports.forgetPassword = async function(req, res, next) {
  try {
    console.log(req.body);
    if (req.body.email) {
      //1. findOne using email
      const user = await userModel.findOne({ email: req.body.email });
      if (user) {
        //2. add token property to that user
        const token = user.generateToken();
        await user.save({ validateBeforeSave: false });

        //3. Sending Email
        console.log(token === user.token);
        const options = {
          to: user.email,
          subject: "Reset Password | OmniFood",
          text: `Reset Password: http://localhost:3000/api/user/resetpassword/${token}`,
          html: `<h1>Reset Password</h1><a href="http://localhost:3000/resetpassword/${token}">Click Here</a>`
        };

        await EmailSender(options);

        //4. send token to the client
        console.log(user);
        res.status(200).redirect("/login");
      } else {
        res.status(401).json({
          data: "User Not Found"
        });
      }
    }
  } catch {
    res.status(401).json({
      data: "Email is Invalid"
    });
  }
};
module.exports.resetPassword = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.password && req.body.confirmpassword && req.params["token"]) {
      if (req.body.password === req.body.confirmpassword) {
        const user = await userModel.findOne({ token: req.params["token"] });

        if (user) {
          user.password = req.body.newpassword;
          user.confirmpassword = req.body.confirmpassword;
          user.token = undefined;
          await user.save();
        } else {
          res.status(401).json({
            data: "User is Not Found"
          });
        }
      } else {
        res.status(401).json({
          data: "Password not matched"
        });
      }
    } else {
      res.status(401).json({
        data: "Invaild Data"
      });
    }
  } catch {
    res.status.json({
      data: "Something Went Wrong"
    });
  }
};
module.exports.resetPasswordForm = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.password && req.body.confirmpassword && req.body.token) {
      if (req.body.password === req.body.confirmpassword) {
        const user = await userModel.findOne({ token: req.body.token });
        console.log(user);
        if (user) {
          user.password = req.body.password;
          user.confirmpassword = req.body.confirmpassword;
          user.token = undefined;
          await user.save();
          res.redirect("/login");
        } else {
          res.status(402).json({
            data: "User is Not Found"
          });
        }
      } else {
        res.status(402).json({
          data: "Password not matched"
        });
      }
    } else {
      res.status(402).json({
        data: "Invaild Data"
      });
    }
  } catch (err) {
    console.log(err);
    res.status(402).json({
      data: "Something Went Wrong"
    });
  }
};
