const PDFDocument = require("pdfkit");
const fs = require("fs");

const generateCertificate = (name, quizTitle, score, path) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(path));
  doc.fontSize(30).text("Certificate of Completion", { align: "center" });
  doc.moveDown();
  doc.fontSize(20).text(`This certifies that ${name}`, { align: "center" });
  doc.text(`has successfully completed the quiz: ${quizTitle}`, { align: "center" });
  doc.text(`Score: ${score}`, { align: "center" });
  doc.end();
};

module.exports = generateCertificate;
