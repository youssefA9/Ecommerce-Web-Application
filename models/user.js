const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "users.json"
);

function getUsersFromFile(cb) {
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

module.exports = class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  save() {
    getUsersFromFile((users) => {
      if (!users.find((user) => user.email === this.email)) {
        users.push(this);
        fs.writeFile(p, JSON.stringify(users), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  }

  static getUser(currentUser) {
    let content = fs.readFileSync(p);

    let users = JSON.parse(content);

    if (
      users.find(
        (user) =>
          user.email === currentUser.email &&
          user.password === currentUser.password
      )
    ) {
      return true;
    }

    return false;
  }
};
