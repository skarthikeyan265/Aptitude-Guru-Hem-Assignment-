const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quizId: String,
  score: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Result", ResultSchema);
