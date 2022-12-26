const path = require("path");
const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");

exports.viewHomepage = (req, res) => {
  Product.fetchAll((products) => {
    res.render("pages/homepage", {
      path: "/",
      logged: false,
      prods: products,
      pageTitle: "All Products",
    });
  });
};

exports.addUser = (req, res) => {
  const user = new User(req.body.email, req.body.password);
  user.save(this);
  res.redirect("/");
};

exports.login = (req, res) => {
  const user = new User(req.body.emaild, req.body.passwordd);
  Product.fetchAll((products) => {
    res.render("pages/homepage", {
      path: "/",
      logged: User.getUser(user),
      prods: products,
      pageTitle: "All Products",
    });
  });
};


exports.viewProductPage = (req, res) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("pages/productPage", {
      path: "",
      prod: product,
      logged: false,
      pageTitle: product.title,
    });
  });
};

exports.addProductToCart = (req, res) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(product);
  });
  res.status(200);
};
