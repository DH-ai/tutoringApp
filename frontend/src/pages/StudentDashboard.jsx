import React, { useState } from "react";
import ProfileSection from "../componenets/ProfileSection";
import SessionsSection from "../componenets/SessionsSection";
import MessagesSection from "../componenets/MessageSection";
import AccountSettings from "../componenets/AccountSettings";
import Navbar from "../componenets/navbar";
import axios from "axios";
import { useEffect } from "react";
// api/users/profile with authtoken to get user profile
// api/users/refreshtoken with authtoken to refresh token
// api/sessions/ with authtoken to get user sessions
// api/messages/ with authtoken to get user messages

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [profile, setProfile] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          },
        );
        setProfile(response.data);
        // console.log(response.data);
      } catch (error) {
        try {
          const response = await axios.post(
            "http://localhost:8000/api/users/refresh/",
            {
              
                refresh: `${localStorage.getItem("refresh_token")}`,
              
            },
          );
          localStorage.setItem("access_token", response.data.access_token);
          fetchProfile();
        } catch (error) {
          console.error("Error fetching profile:", error);
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          window.location.href = "/login";
        }
      }
    };

    const fetchSessions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/sessions/",
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
          "http://localhost:8000/api/messages/",
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
    fetchSessions();
    // fetchMessages();
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-500 h-screen">
      {/* Navbar */}
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
            onClick={() => setActiveTab("messages")}
          >
            My Messages
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
        <div className=" border-gray-200 rounded-lg border-2 w-52  p-4 bg-white shadow-lg">
          {activeTab === "dashboard" && (
            <>
              <ProfileSection prop={profile.username} />
              {/* <SessionsSection sessions={sessions} /> */}
              
              
           {/* <SessionsSection sessions={sessions} /> */}
            </>
          )}
          {activeTab === "messages" && <MessagesSection messages={messages} />}
          {/* {activeTab === "account" && <AccountSettings />} */}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
