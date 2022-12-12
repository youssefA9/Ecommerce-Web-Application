const path = require("path");
const express = require("express");
const router = express.Router();
const homepageController = require("../controllers/homepage.js");

router.get("/", homepageController.viewHomepage);

router.post("/login-user", homepageController.login);

router.post("/register-user", homepageController.addUser);

module.exports = router;