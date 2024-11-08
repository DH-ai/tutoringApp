import React from 'react';
// import { useHistory } from 'react-router-dom';
import Navbar  from './navbar';
import Footer  from './footer';

const LoginSuccess = () => {

    return (
        <div>
            <Navbar />
            <div className="login-success">
                <h1>Congratulations!</h1>
                <p>You have successfully logged in.</p>
                <button onClick={goToHomepage}>Go to Homepage</button>
            </div>
            <Footer />
        </div>
    );
};

export default LoginSuccess;