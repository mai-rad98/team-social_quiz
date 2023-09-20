// Dashboard.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dash.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  const navigateToGeneralQuestions = () => {
    navigate('/generalQuestions');
  };

  const { username } = location.state || {};

  return (
    <div>
      <h2 className="welcome-message">Welcome, {username}!</h2>
      {/* Display the username */}

      <h2>Select section</h2>
      <div className="cards-container">
        <div className="card1">
          <div className="card-title">General Questions</div>
          <div className="card-content">
            Section on generalQuestions
            <button className="card-button" onClick={navigateToGeneralQuestions}>
              Click Me
            </button>
          </div>
        </div>

        <div className="card2">
          <div className="card-title">Movies Section</div>
          <div className="card-content">
            Section on movies
            <button className="card-button">Click Me</button>
          </div>
        </div>
        <div className="card3">
          <div className="card-title">Cars</div>
          <div className="card-content">
            Section on cars
            <button className="card-button">Click Me</button>
          </div>
        </div>
      </div>
      <p></p>
      <p></p>
      <button className="log-out" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
