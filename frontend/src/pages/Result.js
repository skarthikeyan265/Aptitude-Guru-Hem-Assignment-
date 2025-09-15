import React from "react";
import API from "../api/api";

const Result = () => {
  const name = localStorage.getItem("name");
  const score = localStorage.getItem("score");
  const pass = localStorage.getItem("pass");

  const downloadCertificate = () => {
    API.post("/certificate", { name, quizTitle: "Sample Quiz", score })
      .then(res => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `certificate_${name}.pdf`);
        document.body.appendChild(link);
        link.click();
      });
  };

  return (
    <div>
      <h2>Result: {pass === "true" ? "Pass" : "Fail"}</h2>
      <p>Score: {score}</p>
      <button onClick={downloadCertificate}>Download Certificate</button>
    </div>
  );
};

export default Result;
