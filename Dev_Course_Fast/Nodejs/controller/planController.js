const fs = require("fs");
const planModel = require("../model/planModel");

module.exports.getAllPlans = (req, res, next) => {
  res.status(200).json(plans);
};

module.exports.getPlan = (req, res, next) => {
  let idx = Number(req.params["id"]) - 1;
  if (idx < plans.length) {
    let Plan = plans[idx];
    res.status(200).json(Plan);
  } else {
    res.status(404).json({
      success: "Plan Not Found"
    });
  }
};

module.exports.createPlan = (req, res, next) => {

  const plan = await planModel.create(req.body);
  
  res.status(200).json({
    success: "A Plan is Created"
  });
  
};

module.exports.updatePlan = (req, res, next) => {
  let idx = Number(req.params["id"]) - 1;
  if (idx < plans.length) {
    var obj = req.body;
    var keys = Object.keys(obj);
    for (let i = 0; i < keys.length; ++i) {
      plans[idx][keys[i]] = obj[keys[i]];
    }
    fs.writeFileSync("./data/plan.json", JSON.stringify(plans));
    res.status(200).json({
      success: "A Plan is Updated",
      data: plans[idx]
    });
  } else {
    res.status(404).json({
      success: "Error"
    });
  }
};

module.exports.deletePlan = (req, res, next) => {
  let idx = Number(req.params["id"]) - 1;
  if (idx < plans.length) {
    let plan = plans[idx];
    fs.writeFileSync("./data/plan.json", JSON.stringify(plans));
    res.status(200).json({
      success: "Plan is Remvoed",
      data: plan
    });
  } else {
    res.status(404).json({
      success: "Plan Not Found"
    });
  }
};