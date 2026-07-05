
const Rocket = require("../models/Rocket");


// GET ALL ROCKETS
const getRockets = async (req, res) => {
    try {

        // SEARCH
        const search = req.query.name || "";

        // FILTER
        const active = req.query.active;

        // PAGINATION
        const page = parseInt(req.query.page) || 1;

        const limit = parseInt(req.query.limit) || 5;

        const skip = (page - 1) * limit;


        // QUERY
        let query = {
            name: {
                $regex: search,
                $options: "i"
            }
        };


        // FILTER ACTIVE
        if (active !== undefined) {
            query.active = active === "true";
        }


        // DATABASE QUERY
        const rockets = await Rocket.find(query)
            .skip(skip)
            .limit(limit);


        // TOTAL COUNT
        const total = await Rocket.countDocuments(query);


        res.json({
            total,
            page,
            limit,
            rockets
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// GET ROCKET BY ID
const getRocketById = async (req, res) => {
    try {

        const rocket = await Rocket.findById(req.params.id);

        if (!rocket) {
            return res.status(404).json({
                message: "Rocket not found"
            });
        }

        res.json(rocket);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// CREATE NEW ROCKET
const createRocket = async (req, res) => {
    try {

        const rocket = await Rocket.create(req.body);

        res.status(201).json(rocket);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// UPDATE ROCKET
const updateRocket = async (req, res) => {
    try {

        const rocket = await Rocket.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after"
            }
        );

        if (!rocket) {
            return res.status(404).json({
                message: "Rocket not found"
            });
        }

        res.json(rocket);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// DELETE ROCKET
const deleteRocket = async (req, res) => {
    try {

        const rocket = await Rocket.findByIdAndDelete(req.params.id);

        if (!rocket) {
            return res.status(404).json({
                message: "Rocket not found"
            });
        }

        res.json({
            message: "Rocket deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getRockets,
    getRocketById,
    createRocket,
    updateRocket,
    deleteRocket
};

