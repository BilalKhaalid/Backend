// db.js
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    //! By writing this line in code it creates a database with the name(learning) you have given in mongodb
    await mongoose.connect("mongodb://localhost:27017/learning", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = { connectToDatabase };
