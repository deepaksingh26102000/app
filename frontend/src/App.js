import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VolunteerZone from './pages/VolunteerZone';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/volunteer-zone" element={<VolunteerZone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
