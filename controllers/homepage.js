const path = require("path");
const User = require("../models/user");

exports.viewHomepage = (req, res) => {
  res.render("homepage", { path: "/", logged: false });
};

exports.viewLoginPage = (req, res) => {
  res.render("login", { path: "/login", logged: false });
};

exports.addUser = (req, res) => {
  const user = new User(req.body.email, req.body.password);
  user.addUser(this);
  res.redirect("/");
};

exports.login = (req, res) => {
  const user = new User(req.body.emaild, req.body.passwordd);
  res.render("homepage", { path: "/", logged: User.getUser(user) });
};
