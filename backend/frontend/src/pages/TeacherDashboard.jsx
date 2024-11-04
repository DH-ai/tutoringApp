import React, { useState } from "react";
import ProfileSection from "../componenets/ProfileSection";
import CurrentSlots from "../componenets/CurrentSlots";
import SlotSettings from "../componenets/SlotSettings";
import ReviewsSection from "../componenets/ReviewsSection";
import AccountSettings from "../componenets/AccountSettings";
import Navbar from "../componenets/navbar";

function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  

  return (
    <div>
        <Navbar />

      {/* Navigation Tabs */}
      <div className="px-56   bg-blue-700">
        <div className="flex justify-start items-center w-full">
          <button className = "text-stone-100 text-l font-sans font-semibold p-2" onClick={() => setActiveTab("dashboard")}>Dashboard</button>
          <button className = "text-stone-100 text-l font-sans font-semibold p-2" onClick={() => setActiveTab("slots")}>Current Slots</button>
          <button className = "text-stone-100 text-l font-sans font-semibold p-2" onClick={() => setActiveTab("slotSettings")}>Slot Settings         </button>
          <button className = "text-stone-100 text-l font-sans font-semibold p-2" onClick={() => setActiveTab("reviews")}>Reviews</button>
          <button className = "text-stone-100 text-l font-sans font-semibold p-2" onClick={() => setActiveTab("account")}>My Account</button>
        </div>
      </div>

      {/* Content Based on Active Tab */}
      <div>
        {activeTab === "dashboard" && <ProfileSection />}
        {activeTab === "slots" && <CurrentSlots />} 
        {activeTab === "slotSettings" && <SlotSettings />}
        {activeTab === "reviews" && <ReviewsSection />}
        {activeTab === "account" && <AccountSettings />}
      </div>
    </div>
  );
}

export default TeacherDashboard;
