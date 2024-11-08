import React, { useEffect, useState } from "react";
// import ProfileSection from "../componenets/ProfileSection";
import CurrentSlots from "../componenets/CurrentSlots";
import SlotSettings from "../componenets/SlotSettings";
import ReviewsSection from "../componenets/ReviewsSection";
import AccountSettings from "../componenets/AccountSettings";
import Navbar from "../componenets/navbar";
import axios from "axios";
import Footer from "../componenets/footer";

const base = "https://tutoringapp-production.up.railway.app";

function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          base+"/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
            },
          },
        );
        // console.log(1);
        setProfile(response.data);
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

        console.error("Error fetching profile:", error.response.data.code);
      } finally {
        setLoading(false);
      }
    };

    const fetchSessions = async () => {
      try {
        const response = await axios.get(
          base+"/api/sessions/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          },
        );
        setSessions(response.data);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          base+"/api/messages/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          },
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchProfile();
    // fetchSessions();

    // fetchMessages();
  }, []);

  

  return (
    <>
      <div className="bg-gradient-to-b from-blue-300 to-blue-500 pb-4">
        <Navbar />

        {/* Navigation Tabs */}
        <div className="px-56   bg-blue-700">
          <div className="flex justify-start items-center w-full">
            <button
              className="text-stone-100 text-l font-sans font-semibold p-2"
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className="text-stone-100 text-l font-sans font-semibold p-2"
              onClick={() => setActiveTab("slotSettings")}
            >
              Slot Settings{" "}
            </button>

            <button
              className="text-stone-100 text-l font-sans font-semibold p-2"
              onClick={() => setActiveTab("account")}
            >
              My Account
            </button>
          </div>
        </div>

        {/* Content Based on Active Tab */}
        <div className="flex justify-center mt-10">
          <div className=" border-gray-200 rounded-lg border-2 p-4 bg-white shadow-lg">
            {activeTab === "dashboard" && (
              <div className=" mx-auto  bg-white rounded-lg w-72  overflow-hidden">
                <div className="px-8 pt-6 pb-4 ">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    My Profile
                  </h2>
                  <div className="mb-6 text-center">
                    <img
                      // src={props.url} // Replace with actual photo URL
                      alt="Profile"
                      className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 text-base">
                      <strong>Username:</strong> {profile?.username}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Phone:</strong> {profile?.phone}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>First Name:</strong> {profile?.first_name}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Last Name:</strong> {profile?.last_name}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Address:</strong> {profile?.address}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>City:</strong> {profile?.city}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>State:</strong> {profile?.state}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Bio:</strong> {profile?.bio}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Subject Interested:</strong>{" "}
                      {profile?.subjectInterested}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Role:</strong> {profile?.role}
                    </p>
                  </div>
                </div>
              </div>
            )}



            {activeTab === "slotSettings" && (
              <div>
                <SlotSettings />
              </div>


            )}

            {activeTab === "account" && <AccountSettings />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TeacherDashboard;
