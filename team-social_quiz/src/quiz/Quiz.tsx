import Question from "./Question";
import quizData from './quizData'
import React, { useState } from 'react';
import './Quiz.css'



const BATCH_SIZE = 5;

const Quiz: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      if ((nextQuestion + 1) % BATCH_SIZE === 0) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      alert(`Quiz finished. You scored ${score}/${quizData.length}`);
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="text-center">Quiz</h1>
      <div className="question-container">
        {quizData
          .slice(currentPage * BATCH_SIZE, (currentPage + 1) * BATCH_SIZE)
          .map((question, index) => (
            <Question
              key={index}
              question={question.question}
               options={question.options}
              answer={question.correctAnswer}
              onAnswer={handleAnswer}
            />
          ))}
      </div>
      <button
        className="navigation-buttons"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <button
        className="navigation-buttons"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={(currentPage + 1) * BATCH_SIZE >= quizData.length}
      >
        Next
      </button>
      <p className="score">
        Score: {score}/{quizData.length}{' '}
      </p>
    </div>
  );
};

export default Quiz;