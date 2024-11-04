import React, { useState } from 'react';

function SlotSettings() {
  const [newSlot, setNewSlot] = useState({ date: '', time: '' });
  const [slots, setSlots] = useState([]);

  const handleAddSlot = () => {
    setSlots([...slots, newSlot]);
    setNewSlot({ date: '', time: '' });
  };

  return (
    <div>
      <h2>Manage Slots</h2>
      <div>
        <h3>Add a New Slot</h3>
        <input 
          type="text" 
          placeholder="Date (YYYY-MM-DD)" 
          value={newSlot.date} 
          onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Time (e.g., 10:00 AM - 11:00 AM)" 
          value={newSlot.time} 
          onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })} 
        />
        <button onClick={handleAddSlot}>Add Slot</button>
      </div>
      <div>
        <h3>Existing Slots</h3>
        <ul>
          {slots.map((slot, index) => (
            <li key={index}>
              {slot.date} - {slot.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SlotSettings;
