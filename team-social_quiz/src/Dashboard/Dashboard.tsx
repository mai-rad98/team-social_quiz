import React from 'react';
import Quiz from '../quiz/Quiz';
import quizData from '../quiz/quizData';


const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/*  dashboard content */}
      <Quiz questions={quizData} />
    </div>
  );
};

export default Dashboard;
