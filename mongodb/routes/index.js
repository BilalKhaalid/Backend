var express = require("express");
var router = express.Router();
// ! importing user model
const User = require("../models/User");

/* GET home page. */
router.get("/", function (req, res, next) {
  // ! This below line is used to create a cookie
  // res.cookie("age", 23);
  // res.send("Cookie Created");

  // ! This line below is used to create a session in the server
  req.session.ban = true;
  res.send("Session Created");
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

// ? Cookies
router.get("/read", (req, res) => {
  // ! This line is used to read all the cookies that exists in the frontend
  console.log(req.cookies);
  res.send("check console");
});

router.get("/clear", (req, res) => {
  // ! This line is used to clear Cookie from the frontend
  res.clearCookie("ban");
  res.send("Cookie Cleared");
});

// ? Sessions
router.get("/check", (req, res) => {
  console.log(req.session);
  if (req.session.ban) {
    res.send("you are banned");
  } else {
    res.send("you are not banned");
  }
});

router.get("/destroy", (req, res) => {
  req.session.destroy((err) => console.log(err));
  console.log(req.session);
  res.send("Session destroyed");
});

module.exports = router;
