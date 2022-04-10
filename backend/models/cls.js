const mongoose = require("mongoose");
const path = require("path");

const schema = new mongoose.Schema({
    class: {
        type:Number,
    },
    ischecked: Boolean,
})

const Cls = new mongoose.model("cls", schema)

module.exports = Cls