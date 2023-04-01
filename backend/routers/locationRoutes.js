const express = require("express");
const { getLocations } = require("../controllers/locationController");
const { protectedRoute } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protectedRoute, getLocations);

module.exports = router;
