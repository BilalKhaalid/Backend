var express = require("express");
var router = express.Router();
const usersModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

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

module.exports = router;
