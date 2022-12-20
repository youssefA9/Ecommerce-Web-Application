const path = require("path");
const express = require("express");
const shopController = require("../controllers/shop.js");
const router = express.Router();

router.get("/", shopController.viewHomepage);

router.post("/login-user", shopController.login);

router.post("/register-user", shopController.addUser);

router.get("/products/:productId", shopController.viewProductPage);

router.post("/cart", shopController.addProductToCart)

module.exports = router;