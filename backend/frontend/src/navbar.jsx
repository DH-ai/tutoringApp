import React from "react";
// import './navbar.css'; // Make sure to create and style this CSS file
import "./input.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-evenly items-stretch ">
          <div className="flex-1 ml-10">
            <a href="/" className="text-4xl font-semibold capitalize">Tutorite</a>
          </div>
          <div className="text-right m-4 w-1/3" id="">
            <div className="flex justify-around items-center space-x-1 text-l">
              <div className="hover:underline hover:text-blue-300">
                <a href="/home">Home</a>
                
              </div>
              <div className="hover:underline hover:text-blue-300">
                <a href="/about">About</a>
              </div>
              <div className="hover:underline hover:text-blue-300">
                <a href="/services">Services</a>
              </div>
              <div className="hover:underline hover:text-blue-300">
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="bg-black text-right flex-1">
            <a href="/login">Login</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
