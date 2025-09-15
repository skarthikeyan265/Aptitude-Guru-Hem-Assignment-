const express = require("express");
const router = express.Router();
const generateCertificate = require("../utils/generateCertificate");

router.post("/", (req, res) => {
  const { name, quizTitle, score } = req.body;
  const filePath = `./certificate_${name}.pdf`;
  generateCertificate(name, quizTitle, score, filePath);
  res.download(filePath);
});

module.exports = router;
