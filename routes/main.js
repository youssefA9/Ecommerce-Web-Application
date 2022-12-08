const path = require("path");
const express = require("express");
const router = express.Router();
const homepageController = require("../controllers/homepage.js");

router.get("/", homepageController.viewHomepage);

router.get("/login", homepageController.viewLoginPage);

router.post("/login-user", homepageController.login);

router.post("/add-user", homepageController.addUser);

module.exports = router;