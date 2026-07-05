
const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getLaunches,
    getLaunchById,
    createLaunch,
    updateLaunch,
    deleteLaunch
} = require("../controllers/launchController");


// PUBLIC ROUTES
router.get("/", getLaunches);

router.get("/:id", getLaunchById);


// PROTECTED ROUTES
router.post("/", authMiddleware, createLaunch);

router.put("/:id", authMiddleware, updateLaunch);

router.delete("/:id", authMiddleware, deleteLaunch);


module.exports = router;
