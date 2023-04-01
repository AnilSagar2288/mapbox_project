const mongoose = require("mongoose");

const locationSchema = mongoose.Schema(
  {
    location_name: {
      type: String,
      required: true,
    },
    loc_longitude: {
      type: Number,
      required: true,
    },
    loc_latitude: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model("location", locationSchema);

module.exports = Location;
