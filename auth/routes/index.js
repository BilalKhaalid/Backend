var express = require("express");
const passport = require("passport");
var router = express.Router();
const localStrategy = require("passport-local");
const userModel = require("./users");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.post("/register", async (req, res) => {
  const userData = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });
  userModel.register(userData, req.body.password).then((registeredUser) => {
    passport.authenticate("local")(req, res, () => {
      res.redirect("/profile");
    });
  });
});

router.get("/profile", isLoggedIn, (req, res) => {
  res.render(`profile`);
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  (req, res) => {}
);

router.get("/logout", isLoggedIn, (req, res, next) => {
  req.logout(function (error) {
    if (error) {
      return next(error);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;
