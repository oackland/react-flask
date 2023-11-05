import React from "react";
import { useUser } from "../context/userContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    // If user is not logged in, redirect them to the login page
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the protected component
  return element;
};

export default ProtectedRoute;
