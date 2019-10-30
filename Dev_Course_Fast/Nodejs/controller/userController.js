const fs = require("fs");
var users = JSON.parse(fs.readFileSync("./data/user.json"));

module.exports.getAllUsers = (req, res, next) => {
  res.status(200).json(users);
};

module.exports.getUser = (req, res, next) => {
  let idx = Number(req.params["id"]) - 1;
  let User = users[idx];
  res.status(200).json(User);
};

module.exports.checkInput = function(req, res, next) {
  if (req.body) {
    if (req.body.name) {
      next();
    } else {
      return res.status(400).json({
        status: "failed",
        response: "You should enter some details to create a user"
      });
    }
  } else {
    return res.status(400).json({
      status: "failed",
      response: "You should enter some details to create a user"
    });
  }
};

module.exports.createUser = (req, res, next) => {
  const id = users.length + 1;
  const NewUser = req.body;
  NewUser.id = id;

  users.push(NewUser);

  fs.writeFileSync("./data/user.json", JSON.stringify(users));
  res.status(200).json({
    success: "A Empty User is Created"
  });
};

module.exports.updateUser = (req, res, next) => {
  let idx = Number(req.params["id"]) - 1;

  if (idx < users.length) {
    let User = users[idx];

    var obj = req.body;
    var keys = Object.keys(obj);

    for (let i = 0; i < keys.length; ++i) {
      users[idx][keys[i]] = obj[keys[i]];
    }

    fs.writeFileSync("./data/user.json", JSON.stringify(users));
    res.status(200).json({
      success: "A Empty User is Created",
      data: users[idx]
    });
  } else {
    res.status(404).json({
      success: "Error"
    });
  }
};

module.exports.deleteUser = (req, res, next) => {
  let idx = Number(req.params["id"]) - 1;

  if (idx < users.length) {
    let user = users[idx];
    fs.writeFileSync("./data/user.json", JSON.stringify(users));
    res.status(200).json({
      success: "User Data is Remvoed",
      data: user
    });
  } else {
    res.status(404).json({
      success: "User Not Found"
    });
  }
};
