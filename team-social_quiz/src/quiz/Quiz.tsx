import React, { useState, useEffect } from 'react';
import shuffle from 'lodash/shuffle';
import axios from 'axios';

import './Quiz.css';
import Question from './Question';
import quizData from './quizData';

// eslint-disable-next-line @typescript-eslint/no-redeclare
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

interface ApiResponse {
  imageUrl: string;
  imagePath: string;
}

interface Props {
  numQuestions: number;
}

const Quiz: React.FC<Props> = ({ numQuestions }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scrapedImageUrl, setScrapedImageUrl] = useState('');

  const imageUrl = scrapedImageUrl;

  const selectQuestionsForGame = () => {
    const moviesQuestions = quizData.filter((q) => q.category === 'Movies') as Question[];
    const countriesQuestions = quizData.filter((q) => q.category === 'Countries') as Question[];
    const trueFalseQuestions = quizData.filter((q) => q.category === 'True or False') as Question[];

    // Combine questions from different categories, shuffle them, and select a subset
    const selectedQuestions = shuffle([
      ...moviesQuestions,
      ...countriesQuestions,
      ...trueFalseQuestions
    ]).slice(0, numQuestions);

    setQuestions(selectedQuestions);
  };

  useEffect(() => {
    selectQuestionsForGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numQuestions]);

  const handleAnswer = (answer: string) => {
    const correctAnswer = questions[currentQuestion].correctAnswer.toLowerCase();
    const selectedAnswer = answer.toLowerCase();

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score === questions.length - 1) {
        axios
          .get<ApiResponse>('http://localhost:8080/scrape')
          .then((response) => {
            const { imageUrl } = response.data;
            setScrapedImageUrl(imageUrl);
            setHasWon(true);
            console.log('imageurl', response.data);
          })
          .catch((error) => {
            console.error('Error calling the API:', error);
          });
      } else {
        alert(`Quiz finished. You scored ${score}/${questions.length}`);
      }
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setHasWon(false);
    selectQuestionsForGame();
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
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question.question}
            options={shuffle([...question.options]).slice(0, 4)}
            answer={question.correctAnswer}
            onAnswer={handleAnswer}
            category={question.category}
          />
        ))}
      </div>

      {hasWon && (
        <div className="popup">
          <h2>Congratulations! You won the game!</h2>
          <p>
            Your score: {score}/{questions.length}
          </p>
          <br />
          <img src={imageUrl} alt="Scraped Meme" style={{ width: '400px', height: 'auto' }} />
          <button onClick={resetGame} style={{ marginTop: '10px' }}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
