import React from 'react';
// import './navbar.css'; // Make sure to create and style this CSS file
import  './output.css';
const Navbar = () => {
    return (
        <>

        <nav className="bg-blue-300">
            <div className="">
                <a href="/">Tutorite</a>
                <ul className="navbar-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

        </nav>
        
        </>

        
    );
};

export default Navbar;