import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PortfolioPage, ProjectDetailPage } from './features/portfolio';
import AdminDashboard from './features/portfolio/AdminDashboard';
import ProjectForm from './features/portfolio/ProjectForm';
import ConfigDashboard from './features/portfolio/ConfigDashboard';
import { AuthProvider } from './features/auth/AuthContext';
import { ToastProvider } from './shared/contexts/ToastContext';
import ProtectedRoute from './features/auth/ProtectedRoute';
import LoginPage from './features/auth/LoginPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected Administrative Routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/new" 
              element={
                <ProtectedRoute>
                  <ProjectForm />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/edit/:id" 
              element={
                <ProtectedRoute>
                  <ProjectForm />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/config" 
              element={
                <ProtectedRoute>
                  <ConfigDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
