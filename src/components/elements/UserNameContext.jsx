import React, { createContext, useState, useContext } from "react";

// Создаем контекст
const UserContext = createContext();

// Создаем провайдер для контекста
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("darling");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

// Создаем хук для удобного использования контекста
export const useUser = () => {
  return useContext(UserContext);
};
