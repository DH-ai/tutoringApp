import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './componenets/Login';
import Register from './componenets/Register';

function App() {
  const isAuthenticated = !!localStorage.getItem('user');  // Check if user is logged in

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/protected" element={isAuthenticated ? <ProtectedComponent /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;