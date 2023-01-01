import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAppContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
