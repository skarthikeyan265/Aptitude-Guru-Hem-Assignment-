const express = require("express");
const router = express.Router();
const Question = require("../models/Question");
const Result = require("../models/Result");

// Get all questions for quiz
router.get("/:quizId", async (req, res) => {
  const { quizId } = req.params;
  const questions = await Question.find({ quizId });
  res.json(questions);
});

// Submit answers
router.post("/submit", async (req, res) => {
  const { userId, quizId, answers } = req.body;

  const questions = await Question.find({ quizId });
  let score = 0;
  questions.forEach((q, i) => {
    if (q.correctAnswer === answers[i]) score++;
  });

  const result = await Result.create({ userId, quizId, score });
  res.json({ score, pass: score >= Math.ceil(questions.length / 2) });
});

module.exports = router;
