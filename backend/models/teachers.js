const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  school_id: String,
  class_id: [String]
});

const Teacher = new mongoose.model("teachers", schema);

module.exports = Teacher;
