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
        <div className="bg-white rounded-lg shadow-lg p-6 w-full  mt-32 text-center ">
          {/* Profile Image */}
          <div className="relative w-36 h-36 mx-20 -mt-20 rounded-full border-4 border-white overflow-hidden">
            <img
              src="https://via.placeholder.com/150" // Replace with an actual image URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Username */}
          <h2 className="text-2xl font-semibold mt-4">NAME</h2>
          {/* <p className="text-gray-500">@jamesslocum</p> */}

          {/* Stats */}
          <div className="flex justify-center space-x-8 mt-4">
            <div>
              <span className="text-lg font-bold">15</span>
              <p className="text-gray-500 text-sm">Comments</p>
            </div>
            <div>
              <span className="text-lg font-bold">1</span>
              <p className="text-gray-500 text-sm">Upvote</p>
            </div>
            <div>
              <span className="text-lg font-bold">1</span>
              <p className="text-gray-500 text-sm">Follower</p>
            </div>
          </div>



          {/* Frequented Communities */}
          <div className="mt-8 p-4 border-t border-gray-200">
            <h3 className="text-gray-600 font-semibold">
              Frequented Communities
            </h3>
            <div className="flex justify-center items-center space-x-2 mt-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <p className="text-gray-500">@jamesslocum</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Profile;
