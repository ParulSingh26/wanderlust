require('dotenv').config()
const { default: mongoose } = require("mongoose");

const dbURI = process.env.DB_URI
// console.log(dbURI)

const connectToDB = async () => {
  try {
    await mongoose.connect(dbURI);
    // await mongoose.connect("mongodb+srv://parulsingh26760:Parul26@cluster26.bmsszdc.mongodb.net/wanderlust2");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDB;

// require("dotenv").config();
// const mongoose = require("mongoose");

// const dbURI = process.env.DB_URI;
// console.log("Connecting to:", dbURI);

// const connectToDB = async () => {
//   try {
//     await mongoose.connect(dbURI, {
//       serverSelectionTimeoutMS: 1000, // helps catch timeout errors
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// };

// module.exports = connectToDB;




