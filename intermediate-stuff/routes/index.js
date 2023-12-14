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
    username: "Bilal Khalid",
    nickname: "Khalid",
    description: "i am bilal khalid ",
    categories: ["science", "psychology", "js"],
    dateCreated: new Date(),
  });
  res.send(userData);
});

router.get("/read", async (req, res) => {
  // ! Find All Documents
  const allDocs = await userModel.find();
  res.send(allDocs);
});

// router.get("/find", async (req, res) => {
//   // ? How to perform case-Insensitive search in Mongoose?

//   // * There's a problem with this approach too that if any document has the same search pattern it'll return all the documents containing search pattern
//   // const regex = new RegExp("bilal", "i");

//   // ! So we'll use this instead this match the exact word not anything containing it
//   const regex = new RegExp("^bilAL$", "i");
//   const caseSearch = await userModel.find({
//     // ! This will result in an empty array so we will use regex for case-Insensitive searches
//     // username: "bilal",
//     username: regex,
//   });
//   res.send(caseSearch);
// });

// ? How to find by categories?
router.get("/find", async (req, res) => {
  const findByCategory = await userModel.find({
    categories: {
      // ! This will search all the users having a value "js" in there categories field
      // * $all accepts an array for multiple values searching
      // $all: "js",
      $all: ["js", "science", "psychology"],
    },
  });
  res.send(findByCategory);
});

router.get("/delete", async (req, res) => {
  const deletedUser = await userModel.findOneAndDelete({
    username: "Bilal",
  });
  res.send(`Deleted User is : ${deletedUser}`);
});

module.exports = router;
