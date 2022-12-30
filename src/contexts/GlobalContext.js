import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
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
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
