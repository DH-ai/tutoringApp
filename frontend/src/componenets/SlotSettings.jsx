import React, { useState } from "react";
import "tailwindcss/tailwind.css";

function SlotSettings() {
  const [newSlot, setNewSlot] = useState({ date: "", time: "" });
  const [slots, setSlots] = useState([]);

  const handleAddSlot = () => {
    setSlots([...slots, newSlot]);
    setNewSlot({ date: "", time: "" });
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
          placeholder="Date (YYYY-MM-DD)"
          value={newSlot.date}
          onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
          className="w-full p-2 mb-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Time (e.g., 10:00 AM - 11:00 AM)"
          value={newSlot.time}
          onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })}
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
        <ul className="list-disc pl-5">
          {slots.map((slot, index) => (
            <li key={index} className="mb-1 text-blue-800">
              {slot.date} - {slot.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SlotSettings;
