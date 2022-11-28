const path = require("path");

exports.viewHomepage = (req, res) => {
  res.render("main", { path: "/" });
};
