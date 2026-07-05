
const mongoose = require("mongoose");

const capsuleSchema = new mongoose.Schema(
{
    serial: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    missions: {
        type: Number,
        default: 0
    },

    reuseCount: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Capsule", capsuleSchema);
