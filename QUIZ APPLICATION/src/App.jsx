import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  const { token } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/register" element={!token ? <RegisterPage /> : <Navigate to="/login" />} />
        <Route path="/" element = {<HomePage />} />
      </Routes>
    </Router>
  );
}

export default function AppWithProvider() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  );
}
