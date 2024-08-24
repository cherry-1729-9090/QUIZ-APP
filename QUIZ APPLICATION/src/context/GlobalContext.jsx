import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [quizDetails, setQuizDetails] = useState(null);
  const [userId, setUserId] = useState(null);
  const [quizId, setQuizId] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <GlobalContext.Provider value={{ user, setUser, quizDetails, setQuizDetails, userId, setUserId, quizId, setQuizId, score, setScore }}>
      {children}
    </GlobalContext.Provider>
  );
};
