const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/auth");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Add passportLocalMongoose plugin to your schema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("AuthUsers", userSchema);
