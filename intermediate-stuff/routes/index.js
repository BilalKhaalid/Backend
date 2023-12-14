var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

// ! Flash Messages Stuff
// router.get("/failed", function (req, res, next) {
//   req.flash("age", 12);
//   res.redirect("/error");
// });

// router.get("/error", function (req, res, next) {
//   console.log(req.flash("age"));
//   res.send(`Error is nothing`);
// });

router.get("/create", async (req, res) => {
  let userData = await userModel.create({
    username: "Bilal",
    nickname: "Khalid",
    description: "i am bilal khalid ",
    categories: ["js", "node", "react"],
    dateCreated: new Date(),
  });
  res.send(userData);
});

router.get("/read", async (req, res) => {
  const allDocs = await userModel.find();
  res.send(allDocs);
});

module.exports = router;
