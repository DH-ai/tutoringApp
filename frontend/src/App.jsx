import React from "react";
import "./output.css";
import studentimg from "./assets/student.png";

import Navbar from "./componenets/navbar";
import { Link } from "react-router-dom";
import Footer from "./componenets/footer";
// import ProfileSection from "./componenets/ProfileSection";
const HomePage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className=" text-white p-6">
          <div className=" flex justify-between items-start">
            <div className="flex-1 text-blue-500 flex ">
              <div className="flex flex-col justify-center">
                <div className=" text-blue-500 mt-32 text-6xl mx-10 font-thin">
                  Discover the <br></br>
                  Future
                </div>
                <div className=" flex text-gray mx-10 my-10 text-2xl">
                  Connecting Students and Tutors
                </div>
              </div>
            </div>
            <div className=" w-2/3 flex justify-end items-end">
              <div className="w- overflow-hidden">
                <img
                  src={studentimg}
                  alt="Student"
                  className="object-cover"
                  style={{ height: "50rem", width: "90rem" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Teacher & Student Profiles */}
        <section className="bg-gray-200 py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Meet the Teachers
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-500 text-white p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-6">
            Join our community and take your learning experience to the next
            level!
          </p>
          <button
            className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-md hover:bg-blue-100"
            onClick={() => {
              const accessToken = localStorage.getItem("access_token");
              if (accessToken) {
                window.location.href = "/";
              } else {
                window.location.href = "/login";
              }
            }}
          >
            Join Now
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
