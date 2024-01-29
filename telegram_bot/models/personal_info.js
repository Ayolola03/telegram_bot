const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LecturerSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  marital_status: { type: String },
  educational_status: { type: String },
});

// Virtual for author's full name
LecturerSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});



// Export model
module.exports = mongoose.model("Lecturer", LecturerSchema);
