import React from "react";
import { Navigate, redirect } from "react-router-dom";

const Logout = () => {
  // Clear user data from local storage or cookies
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("role");
  localStorage.removeItem("username");
  // Redirect to login page
  // redirect("/login");
  window.location.href = "/login";
  console.log("Logged out");

  return <Navigate to="/login" />;
};

export default Logout;