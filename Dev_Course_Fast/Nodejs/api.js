const express = require("express");
const app = express();

const userRouter = require("./router/userRouter");
const planRouter = require("./router/planRouter");

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "views");

app.get("/", function(req, res){
    res.status(200).render("base.pug");
})

app.use("/api/user", userRouter);
app.use("/api/plan", planRouter);

module.exports = app;


// Router
// \
// \login
// \signup
// \home
// \plan
// \planpage
// \reset
// \forgetpassword
// \userpage
