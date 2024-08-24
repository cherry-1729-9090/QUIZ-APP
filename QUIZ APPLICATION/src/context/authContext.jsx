import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../axiosCalls/userCalls';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      axios.get('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(() => {
        setToken(null);
        localStorage.removeItem('token');
      });
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    axios.get('/api/users/me', {
      headers: { Authorization: `Bearer ${newToken}` }
    })
    .then(response => {
      setUser(response.data);
    });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
