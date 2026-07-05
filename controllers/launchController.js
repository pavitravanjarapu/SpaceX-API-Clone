
const Launch = require("../models/Launch");


// GET ALL LAUNCHES
const getLaunches = async (req, res) => {
    try {

        const launches = await Launch.find();

        res.json(launches);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// GET LAUNCH BY ID
const getLaunchById = async (req, res) => {
    try {

        const launch = await Launch.findById(req.params.id);

        if (!launch) {
            return res.status(404).json({
                message: "Launch not found"
            });
        }

        res.json(launch);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// CREATE LAUNCH
const createLaunch = async (req, res) => {
    try {

        const launch = await Launch.create(req.body);

        res.status(201).json(launch);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// UPDATE LAUNCH
const updateLaunch = async (req, res) => {
    try {

        const launch = await Launch.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after"
            }
        );

        if (!launch) {
            return res.status(404).json({
                message: "Launch not found"
            });
        }

        res.json(launch);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// DELETE LAUNCH
const deleteLaunch = async (req, res) => {
    try {

        const launch = await Launch.findByIdAndDelete(req.params.id);

        if (!launch) {
            return res.status(404).json({
                message: "Launch not found"
            });
        }

        res.json({
            message: "Launch deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getLaunches,
    getLaunchById,
    createLaunch,
    updateLaunch,
    deleteLaunch
};