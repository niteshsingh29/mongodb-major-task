const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  school_id: {
    type: String,
    unique: true,
    required: true,
  },
  class_id: String,
});

const Schoolclass = new mongoose.model("schoolclass", schema);

module.exports = Schoolclass;
