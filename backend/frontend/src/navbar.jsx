import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
// import './navbar.css'; // Make sure to create and style this CSS file
import "./input.css";
const Navbar = () => {
//   const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <nav>
        <div className="flex justify-evenly items-stretch ">
          <div className="flex-1 ml-10">
            <a href="/" className="text-4xl font-semibold capitalize">
              Tutorite
            </a>
          </div>
          <div className=" m-4 w-1/3" id="">
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
          <div className="flex-1 justify-end">
          <FaUserCircle className="text-2xl text-blue-600 hover:opacity-30" />

            {/* {isLogged ? (
              <>
                <FaUserCircle className="text-2xl text-blue-600" />
                <button onClick={handleLogout} className="text-blue-600">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={handleLogin} className="text-blue-600">
                Sign In
              </button>
            )} */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
