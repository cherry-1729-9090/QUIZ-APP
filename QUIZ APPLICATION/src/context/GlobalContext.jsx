import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [quizDetails, setQuizDetails] = useState(null);
  const [userId, setUserId] = useState(null);
  return (
    <GlobalContext.Provider value={{ user, setUser, quizDetails, setQuizDetails, userId, setUserId }}>
      {children}
    </GlobalContext.Provider>
  );
};
