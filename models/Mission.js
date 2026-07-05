
const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema(
{
    missionName: {
        type: String,
        required: true
    },

    manufacturers: {
        type: String,
        required: true
    },

    payloadIds: {
        type: [String]
    },

    wikipedia: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Mission", missionSchema);