import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

const ProtectedRoutes = () => {
  const { isLoggedIn } = useGlobalContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
