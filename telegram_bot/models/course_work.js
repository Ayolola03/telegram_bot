const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  course_taught: { type: String, maxLength: 100 },
  lecturer_position: { type: String, maxLength: 100 },
  
});




// Export model
module.exports = mongoose.model("Course", CourseSchema);
