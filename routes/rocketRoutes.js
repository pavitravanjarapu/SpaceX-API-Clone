
const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    getRockets,
    getRocketById,
    createRocket,
    updateRocket,
    deleteRocket
} = require("../controllers/rocketController");


// PUBLIC ROUTES
router.get("/", getRockets);

router.get("/:id", getRocketById);


// PROTECTED ROUTES
router.post("/", authMiddleware, createRocket);

router.put("/:id", authMiddleware, updateRocket);

router.delete("/:id", authMiddleware, deleteRocket);


module.exports = router;
