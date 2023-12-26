var express = require("express");
var router = express.Router();
// ! importing user model
const User = require("../models/User");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// ! Create User route
router.get("/create", async (req, res) => {
  const createdUser = await User.create({
    username: "Bilal",
    email: "Bilal@gmail.com",
    password: "1245",
    age: 22,
  });
  res.send(createdUser);
});

module.exports = router;
