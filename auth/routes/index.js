var express = require("express");
const passport = require("passport");
var router = express.Router();
const userModel = require("./users");
const localStrategy = require("passport-local");
const app = require("../app");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// ! Profile Router
router.get("/profile", (req, res) => {
  res.send("Welcome to profile");
});

// ! register route
router.post("/register", (req, res) => {
  let user = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });

  userModel.register(user, req.body.password).then((registeredUser) => {
    passport.authenticate("local")(req, res, () => {
      res.redirect("/profile");
    });
  });
});

// ! Login route
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/",
  }),
  (req, res) => {}
);

// ! Logout Route
app.get("logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect("/");
    }
  });
});

function isLoggedIn(req, res, next) {
  // ! isAuthenticated() checks whether the requesting user is logged in / authenticated
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
}

module.exports = router;
