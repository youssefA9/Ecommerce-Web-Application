const fs = require("fs");
const path = require("path");

function readUsersFile(cb) {
  fs.readFile(
    path.join(__dirname, "..", "data", "users.json"),
    (err, content) => {
      if (err) {
        cb([]);
      } else {
        try {
          cb(JSON.parse(content));
        } catch (err) {
          console.log(err);
        }
      }
    }
  );
}

module.exports = class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  addUser() {
    readUsersFile((users) => {
      if (!users.find((user) => user.email === this.email)) {
        users.push(this);
        fs.writeFile(
          path.join(__dirname, "..", "data", "users.json"),
          JSON.stringify(users),
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  static getUser(currentUser) {
    let content = fs.readFileSync(
      path.join(__dirname, "..", "data", "users.json")
    );

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
