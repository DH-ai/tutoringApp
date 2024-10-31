import React from "react";
import './output.css';
import studentimg from './assets/student.png';

import Navbar from "./navbar";
const HomePage = () => {
  return (
    
    <div className="min-h-screen bg-gray-100 text-gray-800">
        {/* Navbar */}
        <Navbar/>
    
      {/* Hero Section */}
      <section className=" text-white p-6">
        <div className=" flex justify-between items-start">
            <div className="flex-1 text-blue-500 flex ">
                <div className="flex flex-col justify-center">

                    <div className=" text-blue-500 mt-32 text-6xl mx-10 font-thin">

                        Discover the <br></br>
                        Future
                    </div>
                    <div className=" flex text-gray mx-10 my-10 text-2xl" >

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
                    style={{height: "50rem", width: "90rem"}}
                    />

                </div>
            </div>


        </div>
        
      </section>

      {/* Featured Classes */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-cente6r mb-6">
            Featured Classes
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  Class Title {item}
                </h3>
                <p className="text-gray-600 mb-4">
                  A brief description of what this class covers, highlighting
                  key skills and topics.
                </p>
                <button className="text-blue-500 hover:text-blue-600 font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher & Student Profiles */}
      <section className="bg-gray-200 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Meet the Team</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((profile) => (
              <div
                key={profile}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
                <h3 className="text-xl font-semibold text-center">
                  Person {profile}
                </h3>
                <p className="text-gray-600 text-center">
                  Role - Teacher/Student
                </p>
              </div>
            ))}
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
        <button className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-md hover:bg-blue-100">
          Join Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;
