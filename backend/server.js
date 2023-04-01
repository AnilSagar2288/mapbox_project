const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routers/userRoutes");
const locationRoutes = require("./routers/locationRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const PORT = process.env.PORT || 8000;
connectDB();
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/locations", locationRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server is running on port ${PORT}`));
