const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  school_id: String,
  selected_class: [String],
  teachername: {
    type: String,
    unique: true
  }
});

const Teacher = new mongoose.model("teachers", schema);

module.exports = Teacher;
