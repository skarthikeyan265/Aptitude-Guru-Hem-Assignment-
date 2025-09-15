const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  quizId: String,
  questionText: String,
  options: [String],
  correctAnswer: String
});

module.exports = mongoose.model("Question", QuestionSchema);
