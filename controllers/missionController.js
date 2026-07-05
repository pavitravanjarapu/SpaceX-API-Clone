
const Mission = require("../models/Mission");


// GET ALL MISSIONS + SEARCH
const getMissions = async (req, res) => {
    try {

        const search = req.query.name || "";

        const missions = await Mission.find({
            missionName: {
                $regex: search,
                $options: "i"
            }
        });

        res.json(missions);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// GET MISSION BY ID
const getMissionById = async (req, res) => {
    try {

        const mission = await Mission.findById(req.params.id);

        if (!mission) {
            return res.status(404).json({
                message: "Mission not found"
            });
        }

        res.json(mission);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// CREATE MISSION
const createMission = async (req, res) => {
    try {

        const mission = await Mission.create(req.body);

        res.status(201).json(mission);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// UPDATE MISSION
const updateMission = async (req, res) => {
    try {

        const mission = await Mission.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after"
            }
        );

        if (!mission) {
            return res.status(404).json({
                message: "Mission not found"
            });
        }

        res.json(mission);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// DELETE MISSION
const deleteMission = async (req, res) => {
    try {

        const mission = await Mission.findByIdAndDelete(req.params.id);

        if (!mission) {
            return res.status(404).json({
                message: "Mission not found"
            });
        }

        res.json({
            message: "Mission deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getMissions,
    getMissionById,
    createMission,
    updateMission,
    deleteMission
};
