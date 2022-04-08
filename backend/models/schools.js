const mongoose = require("mongoose");
const path = require("path");

const schema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: true
    }
})

const School = new mongoose.model("school", schema)

module.exports = School