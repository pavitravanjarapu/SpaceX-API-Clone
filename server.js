
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const rocketRoutes = require("./routes/rocketRoutes");
const authRoutes = require("./routes/authRoutes");
const launchRoutes = require("./routes/launchRoutes");
const capsuleRoutes = require("./routes/capsuleRoutes");
const missionRoutes = require("./routes/missionRoutes");


// LOAD ENV VARIABLES
dotenv.config();


// CONNECT DATABASE
connectDB();


// INITIALIZE EXPRESS
const app = express();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/rockets", rocketRoutes);

app.use("/api/launches", launchRoutes);

app.use("/api/capsules", capsuleRoutes);

app.use("/api/missions", missionRoutes);


// HOME ROUTE
app.get("/", (req, res) => {
    res.send("SpaceX API Running");
});


// PORT
const PORT = process.env.PORT || 5000;


// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
