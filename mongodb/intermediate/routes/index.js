var express = require("express");
var router = express.Router();
const UserModel = require("../models/User");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// ! Creating Users for questions
router.get("/create", async function (req, res) {
  const User = await UserModel.create({
    username: "Naveed",
    password: "password",
    categories: ["lawyer", "court", "judge"],
    description: "Hey I am a lawyer",
  });
  res.send(User);
});

// ! Getting all users
router.get("/users", async function (req, res) {
  const all = await UserModel.find();
  res.send(all);
});

// ? How can i perform a case-insensitive search in mongodb?
router.get("/find", async (req, res) => {
  // ! When we search like this we find the user by username but there's a catch if we by any chance the query parameter to lowerCase in our case Harsh to harsh we will not able to find the user
  // const user = await UserModel.find({ username: "Harsh" });
  // ! So we use this method regex: new RegExp(query,flag)
  // * i means in-sensitive
  // let regex = new RegExp("Harsh", "i");
  // * but there is another catch in this regex that now it will bring all the users that contain Harsh in there name run the below line to get it so we will do a little trick

  // ! In regex ^ this sign tell the algorithm that it want to query the string starting from ^ this symbol and ending the string from $ this symbol let's implement
  let regex = new RegExp("^harsh$", "i");

  // ! Now this regex will give the exact match of the user you are querying from
  const user = await UserModel.find({ username: regex });
  res.send(user);
});

// ? How can i find documents where an array field contains all of a set of values?
router.get("/categories", async (req, res) => {
  const user = await UserModel.find({
    // ! $all means give me all the users array who contain these query fields in the categories array
    categories: { $all: ["doctor", "medicine"] },
  });
  res.send(user);
});

// ? How can i search for documents with specific date range in mongoose?
router.get("/date", async (req, res) => {
  let from_date = new Date("2023-12-27");
  let to_date = Date.now();
  const user = await UserModel.find({
    createdAt: {
      // ! $gte stands for greater than and equal to
      $gte: from_date,
      // ! $lte stands for less than and equal to
      $lte: to_date,
    },
  });
  res.send(user);
});

module.exports = router;
