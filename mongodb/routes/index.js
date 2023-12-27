var express = require("express");
var router = express.Router();
// ! importing user model
const User = require("../models/User");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// ! Get all Users
router.get("/users", async (req, res) => {
  const all_Users = await User.find({});
  res.send(all_Users);
});

// ! Create User route
router.post("/create", async (req, res) => {
  const createdUser = await User.create({
    username: "Bilal",
    email: "Bilal@gmail.com",
    password: "1245",
    age: 22,
  });
  res.send(createdUser);
});

// ! Delete a User
router.get("/delete", async (req, res) => {
  const deletedUser = await User.findOneAndDelete({
    username: "Ali",
  });
  console.log(deletedUser);
  res.send(`User deleted successfully: ${deletedUser}`);
});

module.exports = router;
