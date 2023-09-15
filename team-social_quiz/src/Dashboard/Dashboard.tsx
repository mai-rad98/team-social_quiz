import React from 'react';
import Quiz from '../quiz/Quiz';
import { useNavigate } from 'react-router-dom';
import './Dash.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div>
      <h2>Welcome, !</h2>
      <Quiz />
      <button className="log-out" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
