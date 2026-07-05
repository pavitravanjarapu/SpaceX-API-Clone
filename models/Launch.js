
const mongoose = require("mongoose");

const launchSchema = new mongoose.Schema(
{
    missionName: {
        type: String,
        required: true
    },

    rocket: {
        type: String,
        required: true
    },

    launchDate: {
        type: Date,
        required: true
    },

    success: {
        type: Boolean,
        default: true
    },

    details: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Launch", launchSchema);
