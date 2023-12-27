var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/flash", function (req, res) {
  // Set a flash message by passing the key, followed by the value, to req.flash().
  req.flash("info", "Flash is back!");
  res.redirect("/");
});

router.get("/", function (req, res) {
  // Get an array of flash messages by passing the key to req.flash()
  res.render("index", { messages: req.flash("info") });
});

module.exports = router;
