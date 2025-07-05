const mongoose = require("mongoose");

const AddcourseSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Addcourse", AddcourseSchema, "addcourses");
