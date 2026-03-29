import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PortfolioPage, ProjectDetailPage } from './features/portfolio';
import AdminDashboard from './features/portfolio/AdminDashboard';
import ProjectForm from './features/portfolio/ProjectForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/new" element={<ProjectForm />} />
        <Route path="/admin/edit/:id" element={<ProjectForm />} />
      </Routes>
    </div>
  );
}

export default App;
