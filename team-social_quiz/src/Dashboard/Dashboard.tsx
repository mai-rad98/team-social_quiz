import React from 'react';
import Quiz from '../quiz/Quiz';
import quizData from '../quiz/quizData';


const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Welcome, !</h2>
      <Quiz/>
      <button >Logout</button>
    </div>
  );
};

export default Dashboard;
