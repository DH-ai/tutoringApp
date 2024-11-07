import React, { useEffect } from 'react';
import {useNavigate, Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from './utils/authcontext';
const ProtectedRoutes = ({ authToken }) => {

  
  return authToken? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;