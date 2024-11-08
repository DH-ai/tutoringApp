import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import CurrentSlots from "./CurrentSlots";

const base = "https://tutoringapp-production.up.railway.app";

function SlotSettings() {
  const [newSlot, setNewSlot] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    maxStudents: "",
  });
  const [isslot, slot] = useState(false);

  const addSessions = async (data) => {
    try {
      const response = await axios.post(
        base+"/api/sessions/createSession/",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        },
      );
    } catch (error) {
      console.error("Error adding sessions:", error);
    }
  };
  const handleAddSlot = () => {
    console.log(newSlot);
    slot(true);
    
    addSessions(newSlot);

    
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Manage Slots</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          Add a New Slot
        </h3>



        <input
          type="text"
          placeholder="Title"
          value={newSlot?.title}
          onChange={(e) => setNewSlot({ ...newSlot, title: e.target.value })}
          className="w-full p-2 mb-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          value={newSlot?.description}
          onChange={(e) =>
            setNewSlot({ ...newSlot, description: e.target.value })
          }
          className="w-full p-2 mb-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          placeholder="Date (YYYY-MM-DD)"
          value={newSlot.date}
          onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
          className="w-full p-2 mb-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="time"
          placeholder="Start Time (e.g., 10:00 AM)"
          value={newSlot.startTime}
          onChange={(e) =>
            setNewSlot({ ...newSlot, startTime: e.target.value })
          }
          className="w-full p-2 mb-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="time"
          placeholder="End Time (e.g., 11:00 AM)"
          value={newSlot.endTime}
          onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
          className="w-full p-2 mb-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Max Students"
          value={newSlot.maxStudents}
          onChange={(e) =>
            setNewSlot({ ...newSlot, maxStudents: e.target.value })
          }
          className="w-full p-2 mb-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddSlot}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Add Slot
        </button>




      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          Existing Slots
        </h3>
        <div>
        {isslot && (
          
          <div className="flex justify-between items-center mt-2 border-t border-gray-300    hover:border-blue-500 ">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {newSlot.title}
            </h3>
            <p className="text-gray-500">{newSlot.description}</p>
            <p className="text-gray-500">
              {newSlot.date} | {newSlot.startTime} - {newSlot.endTime}
            </p>
            <p className="text-gray-500">
              0/{newSlot.maxStudents} Students
            </p>


          </div>
        )}
          
        </div>
      </div>
    </div>
  );
}

export default SlotSettings;
