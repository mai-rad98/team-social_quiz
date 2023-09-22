import { useNavigate } from 'react-router-dom';
import './Dash.css';
import React, { useState } from 'react';

const Sections: React.FC = () => {
  const navigate = useNavigate();
  const [selectedNumQuestions, setSelectedNumQuestions] = useState(5);

  const navigateToGeneralQuestions = () => {
    navigate(`/generalQuestions/${selectedNumQuestions}`);
  };

  return (
    <div>
      <h2>Select section</h2>
      <div className="cards-container">
        <div className="card1">
          <div className="card-title">General Questions</div>
          <div className="card-content">
            <h2>Select the number of questions:</h2>
            <button className="card-button" onClick={() => setSelectedNumQuestions(5)}>
              5 Questions
            </button>
            <button className="card-button" onClick={() => setSelectedNumQuestions(7)}>
              7 Questions
            </button>
            <button className="card-button" onClick={navigateToGeneralQuestions}>
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
