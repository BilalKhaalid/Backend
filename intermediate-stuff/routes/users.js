const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/intermediate");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: [],
  },
  dateCreated: Date.now(),
});

mongoose.model("user", userSchema);

module.exports = userSchema;
