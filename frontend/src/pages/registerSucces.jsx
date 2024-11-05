import React from 'react';
import { Link } from 'react-router-dom';
// import './registerSucces.css'; // Assuming you have a CSS file for styling

const RegisterSuccess = () => {
    return (
        <div className="success-container">
            <h1>Registration Successful</h1>
            <p>Thank you for registering! Your account has been created successfully.</p>
            <Link to="/login" className="btn btn-primary">Go to Login</Link>
        </div>
    );
};

export default RegisterSuccess;