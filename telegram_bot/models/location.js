const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  building: { type: String, required: true, maxLength: 100 },
  office_location: { type: String, required: true, maxLength: 100 },
  
});

// Export model
module.exports = mongoose.model("Location", LocationSchema);
