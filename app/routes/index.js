var express = require("express");
var router = express.Router();
const usersModel = require("./users");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

// ! Create

router.get("/create", async (req, res) => {
  const createdUser = await usersModel.create({
    username: "Bilal Khalid",
    name: "Bilal2",
    age: 21,
  });
  res.send(createdUser);
});

// ! Read
router.get("/all", async (req, res) => {
  const allUsers = await usersModel.find();
  res.send(allUsers);
});

// ! Delete
router.get("/delete", async (req, res) => {
  const deletedUser = await usersModel.findOneAndDelete({
    name: "Bilal",
  });
  res.send(deletedUser);
});

// ! Creating Session
router.get("/", (req, res) => {
  req.session.ban = true;
  res.send("<h1>Home Page</h1>");
});

// ! Reading session data
router.get("/read", (req, res) => {
  if (req.session.ban === true) {
    res.send("banned");
  } else {
    res.send("not banned");
  }
});

// ! Deleting Session data
router.get("/removeban", (req, res) => {
  if (req.session.ban) {
    req.session.destroy();
    res.send("Your ban removed");
  } else {
    res.send("you are not banned");
  }
});

// ! Creating cookie data
router.get("/cookie", (req, res) => {
  res.cookie("users_Cookie", "Bilal");
  res.send("cookie created");
});

// ! Reading all cookies data
router.get("/cookies", (req, res) => {
  if (req.cookies) {
    res.send(`All cookies ${req.cookies.users_Cookie}`);
  } else {
    res.send(`No Cookies found`);
  }
});

// ! Deleting  cookie data
router.get("/delete-cookies", (req, res) => {
  res.clearCookie("users cookie");
  res.send(`deleted cookie: ${req.cookies}`);
});

module.exports = router;
