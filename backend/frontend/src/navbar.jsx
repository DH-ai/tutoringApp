import React from "react";
// import './navbar.css'; // Make sure to create and style this CSS file
import "./input.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-evenly items-stretch ">
          <div className="justify-self-start">
            <a href="/" className="text-4xl font-semibold capitalize">Tutorite</a>
          </div>
          <div className="text-right m-4" id="">
            <div className="flex justify-between items-center space-x-8 hover:underline">
              <div className="">
                <a href="/home">Home</a>
                
              </div>
              <div>
                <a href="/about">About</a>
              </div>
              <div>
                <a href="/services">Services</a>
              </div>
              <div>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="bg-black text-right">
            <a href="/login">Login</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
