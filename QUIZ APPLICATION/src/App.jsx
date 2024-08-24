import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GlobalContext } from './context/GlobalContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
// import './styles/lightTheme.css';
import './App.css';

function App() {
  const { user } = React.useContext(GlobalContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/login" />} />
        <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/quiz/:difficulty" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
