const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  school_id: String,
  class_id: Number,
});

const Schoolclass = new mongoose.model("Schoolclass", schema);

module.exports = Schoolclass;
