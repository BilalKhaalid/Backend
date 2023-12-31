const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  categories: {
    type: Array,
    default: [],
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);
