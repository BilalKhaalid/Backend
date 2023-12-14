var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/failed", function (req, res, next) {
  req.flash("age", 12);
  res.redirect("/error");
});

router.get("/error", function (req, res, next) {
  console.log(req.flash("age"));
  res.send(`Error is nothing`);
});

module.exports = router;
