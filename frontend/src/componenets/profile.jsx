import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import ChatApp from "../pages/chatApp";

// getting data from the backend
// user name
// slots
// chating
const base = import.meta.env.REACT_APP_BACKEND_URL;

// can be copied pase for student also

function Profile() {
  const [profile, setProfile] = useState([]);
  const { userid } = useParams();
  const [ismessage, setMessage] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      var url = base+"/api/users/profile/";
      if (userid !== undefined) {
        url = url + userid;
      }
      console.log(url);

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
          },
        });
        // console.log(1);
        setProfile(response.data);
        // console.log(response.data);
      } catch (error) {
        if ((error.response.data.code = `token_not_valid`)) {
          const res = await axios.post(
            base+"/api/users/refresh/",
            {
              refresh: localStorage.getItem("refresh_token"),
            },
          );
          localStorage.setItem("access_token", res.data.access);
        }

        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
    // console.log(profile);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-300 to-blue-500 min-h-screen flex flex-col items-center font-sans px-4">
        {/* Navbar */}

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full  mt-32  ">
          <div className="">
            {/* Profile Image  and name */}
            <div className="md:flex ">
              <div className="relative w-36 h-36 ml-20 mr-10 -mt-20 rounded-full border-4 border-white overflow-hidden">
                <img
                  src="https://via.placeholder.com/150" // Replace with an actual image URL
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Username */}
              </div>
              <h2 className="text-2xl font-semibold ">
                {profile?.first_name}{" "}
              </h2>
              <div className="px-2 mt-1 ml-7">
                <FaEnvelope
                  size={30}
                  className="text-blue-300 hover:text-blue-500 transition-all "
                  onClick={() => setMessage(!ismessage)}
                />
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-between">
            {/* Profile Details */}
            <div className="mt-8 p-4 ">
              <h2 className="text-gray-600 font-semibold">Profile Details</h2>
              <div className="mt-2">
                <p className="text-gray-500">
                  <span className="font-semibold">Email:</span>
                  {profile?.email}
                </p>
              </div>
            </div>

            {/* Brief Intro and interested topic to teach */}
            <div className="mt-8 p-4 ">
              <h2 className="text-gray-800 font-semibold">
                Brief Introduction
              </h2>
              <p className="px-1">{profile?.bio}</p>
              <div className=" py-2">
                <h3 className="text-gray-800 font-semibold">
                  Topics I'm Interested in Teaching:
                </h3>
                {!profile?.subjectsInterested ? (
                  <div className="h-44 flex justify-center items-center">
                    <div className="flex gap-2">
                      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
                    </div>
                  </div>
                ) : (
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
                )}
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
              <div>
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
                  “Makes difficult topics easy to understand. Highly recommend!”
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div
          className={`fixed bottom-2 right-2 w-1/3 h-1/3 bg-blue-100 border-2 border-gray-700 ${ismessage ? "block" : "hidden"} rounded-lg shadow-xl transition-all`}
        >
          <div className="flex justify-between items-center p-4">
            <h3 className="text-gray-600 font-semibold">Chat</h3>
            <button onClick={() => setMessage(!ismessage)}>
              <span className="text-red-500">Close</span>
            </button>
          </div>
          <div className="h-4/5 p-4 ">
            <div className="h-4/5 border-t border-gray-900 ">
             <ChatApp userid={profile.id} role={profile.role} />              
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
