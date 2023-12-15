var express = require("express");
const passport = require("passport");
var router = express.Router();
const localStrategy = require("passport-local");
const userModel = require("./users");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/register", async (req, res) => {
  const userData = new userModel({
    username: String,
    password: String,
  });
  userModel.register(userData, req.body.password).then((registeredUser) => {
    passport.authenticate("local")(req, res, () => {
      res.redirect("/profile");
    });
  });
});

router.get("/profile", (req, res) => {
  res.send("Welcome to profile");
});

module.exports = router;
