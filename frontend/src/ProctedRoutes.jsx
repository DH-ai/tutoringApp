import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ authToken }) => {
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;