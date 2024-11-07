import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const LoginRoute = ({ authToken }) => {
  

  return authToken ? <Navigate to="/" /> : <Outlet />;
};

export default LoginRoute;