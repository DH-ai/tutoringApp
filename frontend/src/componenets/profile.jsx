import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

// getting data from the backend
// user name
// slots
// chating
// can be copied pase for student also

function Profile() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-300 to-blue-500 min-h-screen flex flex-col items-center font-sans">
        {/* Navbar */}

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full  mt-32  ">
          <div className="">
            {/* Profile Image  and name */}
            <div className="md:flex">
              <div className="relative w-36 h-36 ml-20 mr-10 -mt-20 rounded-full border-4 border-white overflow-hidden">
                <img
                  src="https://via.placeholder.com/150" // Replace with an actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Username */}
              </div>
              <h2 className="text-2xl font-semibold ">Dhruv Chaturvedi</h2>
            </div>
          </div>
          <div className="md:flex md:justify-between">
            {/* Profile Details */}
            <div className="mt-8 p-4 ">
              <h2 className="text-gray-600 font-semibold">Profile Details</h2>
              <div className="mt-2">
                <p className="text-gray-500">
                  <span className="font-semibold">Email:</span>{" "}
                </p>
              </div>
            </div>

            {/* Brief Intro and interested topic to teach */}
            <div className="mt-8 p-4 ">
              <h2 className="text-gray-800 font-semibold">
                Brief Introduction
              </h2>
              <p className="px-1">
                Hello, I'm Dhruv Chaturvedi, a passionate educator with a focus
                on helping students succeed.
              </p>
              <div className=" py-2">
                <h3 className="text-gray-800 font-semibold">
                  Topics I'm Interested in Teaching:
                </h3>
                <ul className="mx-1">
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Computer Science</li>
                  <li>Artificial Intelligence</li>
                  <li>Data Science</li>
                </ul>
              </div>
            </div>

            {/* Available Slots */}
            <div className="mt-8 p-4 w-1/3  h-full ">
              <h1 className="text-gray-600 font-semibold">Available Slots</h1>
              <div>
                {/* A for loop looping through available slots and plotting them */}

                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <div
                    className="flex justify-between items-center mt-2 border-t border-gray-300  transform hover:scale-x-105  hover:border-blue-500 transition-transform duration-00"
                    key={day}
                  >
                    <p className="text-gray-500">{day}</p>
                    <p className="text-gray-500">10:00 AM - 12:00 PM</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Frequented Communities */}
          <div className="mt-8 p-4 border-t border-gray-200">
            <h3 className="text-gray-600 font-semibold">Reivews</h3>
            <div className="flex justify-evenly items-center space-x-2 mt-2">

                <div >
                  <h4>Student A</h4>
                  <p>
                    “Great teacher! Very clear explanations and patient with
                    questions.” 
                  </p>
                </div>
                <div>
                  <h4>Student B</h4>
                  <p>
                    “Learned a lot from the sessions, especially in advanced
                    topics.”
                  </p>
                </div>
                <div>
                  <h4>Student C</h4>
                  <p>
                    “Makes difficult topics easy to understand. Highly
                    recommend!”
                  </p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Profile;
