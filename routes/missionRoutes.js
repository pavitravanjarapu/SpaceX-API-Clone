
const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getMissions,
    getMissionById,
    createMission,
    updateMission,
    deleteMission
} = require("../controllers/missionController");


// PUBLIC ROUTES
router.get("/", getMissions);

router.get("/:id", getMissionById);


// PROTECTED ROUTES
router.post("/", authMiddleware, createMission);

router.put("/:id", authMiddleware, updateMission);

router.delete("/:id", authMiddleware, deleteMission);


module.exports = router;
