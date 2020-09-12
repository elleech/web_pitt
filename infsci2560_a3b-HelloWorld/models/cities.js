// Data Model for Cities
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  country: { type: String },
  city: { type: String },
  attraction: { type: String }
});

// Export model
module.exports = mongoose.model("cities", CitySchema);
