const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    schoolName: String
})

const School = new mongoose.model("school", schema)

module.exports = School