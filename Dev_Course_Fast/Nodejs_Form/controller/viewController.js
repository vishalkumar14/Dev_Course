const userModel = require("../model/userModel");
const planModel = require("../model/planModel");

module.exports.login = async (req, res, next) => {
  try {
    res.status(200).render("Login.pug", {
      title: "Login | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.signup = async (req, res, next) => {
  try {
    res.status(200).render("SignUp.pug", {
      title: "Sign Up | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.productPage = async (req, res, next) => {
  try {
    res.status(200).render("productPage", {
      title: "Plan Page | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.allplans = async (req, res, next) => {
  try {
    let plans = await planModel.find();
    res.status(200).render("planContainer", {
      title: "All Plans | OmniFood",
      plans
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.resetPassword = async (req, res, next) => {
  try {
    res.status(200).render("resetPassword.pug", {
      title: "Reset Password | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.forgetPassword = async (req, res, next) => {
  try {
    res.status(200).render("forgetPassword.pug", {
      title: "Forget Password | OmniFood"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};
module.exports.userPage = async (req, res, next) => {
  try {
    res.status(200).sendFile("SignUp.html");
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};
