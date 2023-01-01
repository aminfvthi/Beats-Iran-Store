import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSidebar = () => {
    setActiveSidebar(!activeSidebar);
  };

  const value = {
    activeSidebar,
    handleSidebar,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
