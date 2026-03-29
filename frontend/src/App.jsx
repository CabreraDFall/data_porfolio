import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PortfolioPage, ProjectDetailPage } from './features/portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
