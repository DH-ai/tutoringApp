import React from "react";
// import './navbar.css'; // Make sure to create and style this CSS file
import "./output.css";
const Navbar = () => {
  return (
    <>
      <nav >
        <div className="flex justify-around items-baseline bg-slate-100">
          <div>

            <a href="/">Tutorite</a>
          </div>
          <div className="" id="">

            <ul className="flex ">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
