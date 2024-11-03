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
        <div className="bg-white rounded-lg shadow-lg p-6 w-full  mt-32 ">
          
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

          {/* Available Slots */}
          <div className="mt-8 p-4 w-1/3  h-full bg-cyan-400 border-t border-gray-200">
                <h1 className="text-gray-600 font-semibold">Available Slots</h1>
                <div>
                    {/* A for loop looping through available slots and plotting them */}
                </div>
          </div>

          {/* <p className="text-gray-500">@jamesslocum</p> */}

          {/* Stats */}

          {/* Frequented Communities */}
          <div className="mt-8 p-4 border-t border-gray-200">
            <h3 className="text-gray-600 font-semibold">Reivews</h3>
            <div className="flex justify-center items-center space-x-2 mt-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <p className="text-gray-500">@jamesslocum</p>
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
