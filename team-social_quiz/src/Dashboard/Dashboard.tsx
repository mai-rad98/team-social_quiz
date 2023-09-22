// Dashboard.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dash.css';
import Sections from './Sections';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  const { username } = location.state || {};

  return (
    <div>
      <h2 className="welcome-message">Welcome, {username}!</h2>
      {/* Display the username */}
      <Sections />

      <button className="log-out" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
