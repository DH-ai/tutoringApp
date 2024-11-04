import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { login } from "../login-handler";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <nav className=" bg-white">
        <div className="flex justify-evenly items-stretch ">
          <div className="flex-1 ml-10">
            <a href="/" className="text-4xl font-semibold capitalize">
              Tutorite
            </a>
          </div>
          <div className=" m-4 w-1/3" id="">
            <div className="flex justify-around items-center space-x-1 text-l">
              <div className="hover:underline hover:text-blue-300">
                <Link to="/">Home</Link>
              </div>
              <div className="hover:underline hover:text-blue-300">
                <Link to="/about">About</Link>
              </div>
              <div className="hover:underline hover:text-blue-300">
                <Link to="/services">Services</Link>
              </div>
              <div className="hover:underline hover:text-blue-300">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className="flex-1  ">
            <div className="flex items-center justify-end h-full">
              {isLogged ? (
                <FaUserCircle className="text-3xl text-blue-600 hover:cursor-pointer mx-6 " />
              ) : (
                // sum more functionalitie may be
                <div className="space-x-2 mr-6 my-2">
                  <button
                    className="border border-3 border-blue-500 rounded-md transition-all text-xl bg-blue-100 text-blue-500 px-2 py-1 hover:bg-blue-500 hover:text-white"
                    onClick={() => login("", "", setIsLogged)}
                  >
                    <Link to="/login">Login</Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
