const mongoose = require("mongoose");

// ! By writing this we define how a single user will be i.e. what structure the document will have
const UsersSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
});

// ! By writing this line in code a collection named Users will be created in the database with all the attribute of the schema we provided i.e. the document in this collection will have the structure of the schema we provided
module.exports = mongoose.model("Users", UsersSchema);
