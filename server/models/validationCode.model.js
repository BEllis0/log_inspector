const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ValidationCodeSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
        expires: 600,
    },
});

const ValidationCode = mongoose.model("ValidationCode", ValidationCodeSchema);
module.exports = ValidationCode;