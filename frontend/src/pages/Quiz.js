import React, { useEffect, useState } from "react";
import API from "../api/api";
import QuestionCard from "../components/QuestionCard";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/quiz/quiz1").then(res => setQuestions(res.data));
  }, []);

  const handleNext = () => {
    setAnswers([...answers, selected]);
    setSelected("");
    if (current < questions.length - 1) setCurrent(current + 1);
    else handleSubmit();
  };

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");
    const res = await API.post("/quiz/submit", { userId, quizId: "quiz1", answers: [...answers, selected] });
    localStorage.setItem("score", res.data.score);
    localStorage.setItem("pass", res.data.pass);
    navigate("/result");
  };

  if (!questions.length) return <div>Loading...</div>;

  return (
    <div>
      <QuestionCard
        question={questions[current]}
        selected={selected}
        handleSelect={setSelected}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Quiz;
