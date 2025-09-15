import React from "react";

const QuestionCard = ({ question, selected, handleSelect }) => {
  return (
    <div>
      <h3>{question.questionText}</h3>
      {question.options.map((opt, idx) => (
        <div key={idx}>
          <input
            type="radio"
            name={question._id}
            value={opt}
            checked={selected === opt}
            onChange={() => handleSelect(opt)}
          />
          {opt}
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
