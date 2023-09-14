import React from 'react';
import './App.css';
import RegistrationForm from './signup/RegistrationForm';
import Dashboard from './Dashboard/Dashboard';
import {Route ,Routes} from 'react-router-dom'
import { useState } from 'react';

function App() {
  
 



  return (
      <div className="App">

      <Routes>
        <Route path='/'  element={<RegistrationForm/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      
   
      </div>
      
 
  
  );
}

export default App;
