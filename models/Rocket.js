const mongoose = require("mongoose");

const rocketSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    company: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: true
    },

    stages: {
        type: Number,
        required: true
    },

    description: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Rocket", rocketSchema);