const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const secret = "mysecret";
const EmailSender = require("../utils/email");

module.exports.signup = async function(req, res) {
  // 1. create user
  const user = await userModel.create(req.body);
  // 2. payload
  const id = user["_id"];
  //jwt.sign
  const token = await jwt.sign({ id }, secret);

  res.cookie("jwt", token, { httpOnly: true });
  // console.log(res.cookie);

  res.status(201).json({
    data: "User Created",
    user,
    token
  });
};
module.exports.login = async function(req, res, next) {
  try {
    const user = await userModel.findOne({ uname: req.body.uname });
    if (user) {
      const dbpassword = user.password;
      const id = user["_id"];

      if (req.body.password === dbpassword) {
        const token = await jwt.sign({ id }, secret);
        res.cookie("jwt", token, { httpOnly: true });

        return res.status(201).json({
          success: "User LoggedIn Sucessfuly",
          token: token,
          user: user
        });
      } else {
        return res.status(201).json({
          data: "Please Enter Correct Password or Username"
        });
      }
    } else {
      res.status(201).json({
        data: "User Not Found"
      });
    }
  } catch {
    res.status(500).json({
      data: "Something Went Wrong"
    });
  }
};
module.exports.logout = function(req, res) {
  res.cookie("jwt", "d,kjbzsdkfbj", {
    httpOnly: true,
    expires: new Date(Date.now())
  });
  res.redirect("/");
};
module.exports.protectroute = async function(req, res, next) {
  try {
    const userToken = req.cookies
      ? req.cookies.jwt
      : null || req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null;
    if (userToken) {
      const token = await jwt.verify(`${userToken}`, secret);
      if (token) {
        req.decoded = token["id"];
        req.user = await userModel.findOne({ _id: token.id });
        req.roleType = req.user["role"];
        next();
      } else {
        return res.status(500).json({
          data: "Something went Wrong Please Login Again"
        });
      }
    } else {
      return res.status(401).json({
        data: "User is Not Logged In"
      });
    }
  } catch {
    return res.status(404).json({
      data: "Error 404!!!"
    });
  }
};
module.exports.isLoggedIn = async function(req, res, next) {
  try {
    const userToken = req.cookies
      ? req.cookies.jwt
      : null || req.headers.authorization
      ? req.headers.authorization.split(" ")[1]
      : null;
    if (userToken) {
      const token = await jwt.verify(`${userToken}`, secret);
      if (token) {
        req.decoded = token["id"];
        req.user = await userModel.findOne({ _id: token.id });
        req.roleType = req.user["role"];
        next();
      } else {
        next();
      }
    } else {
      next();
    }
  } catch {
    return res.status(404).json({
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
        return res.status(401).json({
          data: "You are not Authorised"
        });
      }
    } catch (err) {
      return res.status(500).json({
        data: "Something Went Wrong"
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
        return res.status(201).json({
          data: "Password Updated Sucessfuly"
        });
      } else {
        return res.status(401).json({
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
    if (req.body.email) {
      //1. findOne using email
      const user = await userModel.findOne({ email: req.body.email });
      if (user) {
        //2. add token property to that user
        const token = user.generateToken();
        await user.save({ validateBeforeSave: false });

        //3. Sending Email
        const options = {
          to: user.email,
          subject: "Reset Password | OmniFood",
          text: `Reset Password: http://localhost:3000/api/user/resetpassword/${token}`,
          html: `<h1>Reset Password</h1><a href="http://localhost:3000/resetpassword/${token}">Click Here</a>`
        };

        await EmailSender(options);

        //4. send token to the client
        return res.status(201).json({
          success: "Reset Token has been Send to your Registered Email ID"
        });
      } else {
        return res.status(401).json({
          data: "User Not Found"
        });
      }
    } else {
      return res.status(401).json({
        data: "Enter Valid Email ID"
      });
    }
  } catch {
    res.status(500).json({
      data: "Something Went Wrong"
    });
  }
};
module.exports.resetPassword = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.body["token"]);
    if (req.body.password && req.body.confirmpassword && req.body["token"]) {
      if (req.body.password === req.body.confirmpassword) {
        const user = await userModel.findOne({ token: req.body["token"] });
        if (user) {
          console.log(user);
          user.password = req.body.password;
          user.confirmpassword = req.body.confirmpassword;
          user.token = undefined;
          await user.save();
          return res.status(201).json({
            data: "Password Reset Sucessfuly"
          });
        } else {
          return res.status(401).json({
            data: "User is Not Found"
          });
        }
      } else {
        return res.status(401).json({
          data: "Password not matched"
        });
      }
    } else {
      return res.status(401).json({
        data: "Invaild Data"
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      data: "Something Went Wrong"
    });
  }
};
