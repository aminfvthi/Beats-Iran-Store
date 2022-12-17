import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
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
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
