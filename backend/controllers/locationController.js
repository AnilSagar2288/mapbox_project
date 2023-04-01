const Location = require("../models/locationModel");
const asyncHandler = require("express-async-handler");

const getLocations = asyncHandler(async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

module.exports = { getLocations };
