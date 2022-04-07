const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    class: Number
}, {collection:'Classes'})

const Classes = new mongoose.model("Classes", schema)

module.exports = Classes