import Question from './Question';
import quizData from './quizData';
import React, { useState } from 'react';
import axios from 'axios';
import './Quiz.css';

const BATCH_SIZE = 5;

type ApiResponse = {
  imageUrl: any;
  imagePath: string;
};
const Quiz: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [score, setScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scrapedImageUrl, setScrapedImageUrl] = useState('');

  const imageUrl = scrapedImageUrl;

  const handleAnswer = (answer: string) => {
    const correctAnswer = quizData[currentQuestion].correctAnswer.toLowerCase();
    const selectedAnswer = answer.toLowerCase();

    console.log('Selected Answer:', selectedAnswer);
    console.log('Correct Answer:', correctAnswer);

    if (selectedAnswer === correctAnswer) {
      console.log('Answer is correct!');
      setScore(score + 1);
    } else {
      console.log('Answer is incorrect.');
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      if (currentPage < Math.floor(nextQuestion / BATCH_SIZE)) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      if (score === 9) {
        axios
          .get<ApiResponse>('http://localhost:8080/scrape')
          .then((response) => {
            const { imageUrl } = response.data;
            setScrapedImageUrl(imageUrl);
            setHasWon(true);
            console.log('imageurl : ', response.data);
          })
          .catch((error) => {
            console.error('Error calling the API:', error);
          });
      } else {
        alert(`Quiz finished. You scored ${score}/${quizData.length}`);
      }
    }
  };

  const resetGame = () => {
    setCurrentPage(0);
    setCurrentQuestion(0);
    setScore(0);
    setHasWon(false);
  };

  return (
    <div className="quiz-container">
      <h1 className="text-center">Quiz</h1>
      <div>
        <button className="reset" onClick={resetGame}>
          Play Again
        </button>
      </div>
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
      <div className="button-container">
        <button
          className="navigation-buttons"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          className="navigation-button1"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={(currentPage + 1) * BATCH_SIZE >= quizData.length}
        >
          Next
        </button>
      </div>
      {hasWon && (
        <div className="popup">
          <h2>Congratulations! You won the game!</h2>
          <img src={imageUrl} alt="Scraped Meme" />
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
      {/*  <p className="score">
        Score: {score}/{quizData.length}{' '}
      </p> */}
      <p></p>
    </div>
  );
};

export default Quiz;
