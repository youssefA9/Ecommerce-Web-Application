const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const mainRoute = require("./routes/main");

app.use(mainRoute);

app.use("/", (req, res) => {
  res.render("error");
});

app.listen(3000);
