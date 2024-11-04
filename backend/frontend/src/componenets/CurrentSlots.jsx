import React from 'react';

function CurrentSlots() {
  const currentSlots = [
    { date: '2024-11-05', time: '10:00 AM - 11:00 AM' },
    { date: '2024-11-06', time: '2:00 PM - 3:00 PM' },
    { date: '2024-11-07', time: '9:00 AM - 10:00 AM' },
  ];

  return (
    <div>
      <h2>Current Available Slots</h2>
      <ul>
        {currentSlots.map((slot, index) => (
          <li key={index}>
            {slot.date} - {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrentSlots;
