const userModel = require("../model/userModel");
const planModel = require("../model/planModel");

module.exports.logIn = async (req, res, next) => {
  try {
    res.status(200).render("Login.pug");
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.signUp = async (req, res, next) => {
  try {
    res.status(200).render('SignUp.pug');
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.plan = async (req, res, next) => {
  try {
    res.status(200).sendFile("plan",{
      title:"Plan Page"
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.planPage = async (req, res, next) => {
  try {
    plans = [1,2,2,3,3,3,3,3];
    res.status(200).render("planContainer", {
      title: "All Plans",
      plans
    });
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.reset = async (req, res, next) => {
  try {
    res.status(200).sendFile("SignUp.html");
  } catch (err) {
    res.status(404).json({
      success: "Page Not Found"
    });
  }
};

module.exports.forgetPassword = async (req, res, next) => {
  try {
    res.status(200).sendFile("SignUp.html");
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
