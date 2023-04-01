const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Location = require("./models/locationModel.js");
const locations = require("./data/locations.js");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    const sampleLocations = locations.map((locations) => {
      return { ...locations, user: "6425dacd19606f0dc50e3133" };
    });
    await Location.insertMany(sampleLocations);
    console.log("Data inserted Successfully !!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const distroyData = async () => {
  try {
    await Location.deleteMany();
    console.log("Data deleted Successfully !!");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  distroyData();
} else {
  importData();
}
