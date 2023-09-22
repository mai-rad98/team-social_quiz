import { useNavigate } from 'react-router-dom';
import './Dash.css';
import React, { useState } from 'react';

const Sections: React.FC = () => {
  const navigate = useNavigate();
  //default to 5 questions if the user did not select number of questions
  const [selectedNumQuestions, setSelectedNumQuestions] = useState(5);

  const navigateToGeneralQuestions = () => {
    navigate(`/generalQuestions/${selectedNumQuestions}`);
  };

  return (
    <div>
      <div className="cards-container">
        <div className="card1">
          <div className="card-title">Select No of Questions</div>
          <div className="card-content">
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
