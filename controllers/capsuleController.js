
const Capsule = require("../models/Capsule");


// GET ALL CAPSULES
const getCapsules = async (req, res) => {
    try {

        const capsules = await Capsule.find();

        res.json(capsules);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// GET CAPSULE BY ID
const getCapsuleById = async (req, res) => {
    try {

        const capsule = await Capsule.findById(req.params.id);

        if (!capsule) {
            return res.status(404).json({
                message: "Capsule not found"
            });
        }

        res.json(capsule);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// CREATE CAPSULE
const createCapsule = async (req, res) => {
    try {

        const capsule = await Capsule.create(req.body);

        res.status(201).json(capsule);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// UPDATE CAPSULE
const updateCapsule = async (req, res) => {
    try {

        const capsule = await Capsule.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after"
            }
        );

        if (!capsule) {
            return res.status(404).json({
                message: "Capsule not found"
            });
        }

        res.json(capsule);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// DELETE CAPSULE
const deleteCapsule = async (req, res) => {
    try {

        const capsule = await Capsule.findByIdAndDelete(req.params.id);

        if (!capsule) {
            return res.status(404).json({
                message: "Capsule not found"
            });
        }

        res.json({
            message: "Capsule deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getCapsules,
    getCapsuleById,
    createCapsule,
    updateCapsule,
    deleteCapsule
};
