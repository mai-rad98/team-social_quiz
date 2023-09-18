import React from 'react';
import './App.css';
import RegistrationForm from './signup/RegistrationForm';
import Dashboard from './Dashboard/Dashboard';
import GeneralQuestions from './Dashboard/GeneralQuestions';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>

      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generalQuestions" element={<GeneralQuestions />} />
      </Routes>
    </div>
  );
}

export default App;
