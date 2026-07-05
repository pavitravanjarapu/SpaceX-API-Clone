
const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getCapsules,
    getCapsuleById,
    createCapsule,
    updateCapsule,
    deleteCapsule
} = require("../controllers/capsuleController");


// PUBLIC ROUTES
router.get("/", getCapsules);

router.get("/:id", getCapsuleById);


// PROTECTED ROUTES
router.post("/", authMiddleware, createCapsule);

router.put("/:id", authMiddleware, updateCapsule);

router.delete("/:id", authMiddleware, deleteCapsule);


module.exports = router;
