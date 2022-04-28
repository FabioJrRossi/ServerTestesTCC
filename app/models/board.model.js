// Import mongoose library.
const mongoose = require("mongoose");

// Creating model to database.
const BoardSchema = mongoose.Schema({
  clientId: String,
  relayFall: Number,
  relayFilter: Number,
  relayHidro: Number,
  relayHot: Number,
});

// Exporting model.
module.exports = mongoose.model("BoardApp", BoardSchema);
