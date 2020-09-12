// Data Model for Countries
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  code: { type: String },
  country: { type: String },
  callingCode: { type: String },
  populationDensity: { type: Number },
  timeZone: { type: String },
  currency: { type: String }
});

// Export model
module.exports = mongoose.model("countries", CountrySchema);
