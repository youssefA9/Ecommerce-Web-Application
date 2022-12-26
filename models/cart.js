const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

function getProductsFromFile(cb) {
  fs.readFile(p, (err, content) => {
    if (err) {
      cb([]);
    } else {
      try {
        cb(JSON.parse(content));
      } catch (err) {
        console.log(err);
      }
    }
  });
}

module.exports = class cart {
  static addProduct(prod) {
    getProductsFromFile((products) => {
      products.push(prod);

      //TODO
      //Bug in this function accross the models
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          // there was an error
          console.log(err);
        }
      });
    });
  }
};
