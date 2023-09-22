import React from 'react';
import '../quiz/Question.css';

interface Props {
  question: string;
  options: string[];
  answer: string;
  category: string;
  onAnswer: (answer: string) => void;
}

const Question: React.FC<Props> = ({ question, options, onAnswer }) => {
  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      <div className="option-list">
        {options.map((option, index) => (
          <ul key={index}>
            <label>
              <input type="radio" name="answer" value={option} onChange={() => onAnswer(option)} />
              {option}
            </label>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Question;
