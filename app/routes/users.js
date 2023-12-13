const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/express-practice");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("users", userSchema);
