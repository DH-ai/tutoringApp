import React, { useEffect } from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { login } from "../login-handler";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLogged(true);
      // setIsMenuOpen(true);
    }
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  
  
  const Logout = () => {
    // Clear user data from local storage or cookies
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    // Redirect to login page
    // redirect("/login");
    window.location.href = "/login";
    console.log("Logged out");
  
  };
  
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
            <p href="/" className="text-2xl font-semibold capitalize mx-4">
              Welcome {
                localStorage.getItem("role") === "student"
                  ? "Student"
                  : localStorage.getItem("role") === "teacher" 
                  ? "Teacher"
                  : "Guest"
              }
            </p>
              {isLogged ? (


                <FaUserCircle
                  onClick={() => {
                    toggleMenu();
                  }}
                  className="text-3xl text-blue-600 hover:cursor-pointer mx-6 "
                /> 

              ) : (
                <div className="space-x-2 mr-6 my-2">
                  <button className="border border-3 border-blue-500 rounded-md transition-all text-xl bg-blue-100 text-blue-500 px-2 py-1 hover:bg-blue-500 hover:text-white">
                    <Link to="/registration">Register</Link>
                  </button>
                </div>
              )}
              {isMenuOpen && (
                    <div className="absolute top-12 right-10 backdrop-blur-md  p-2 text-lg font-semibold text-black space-y-2 border-black border-2  rounded-md ">
                      <ul>
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to='/dashboard' className="hover:text-white">Dashboard</Link></li>
                        <li><Link to="/logout" className="hover:text-white" >Logout</Link></li>
                        
                      </ul>
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
