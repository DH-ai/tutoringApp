import React from 'react';

function SessionsSection() {
  const previousSessions = [
    { date: '2024-10-10', topic: 'Algebra Basics' },
    { date: '2024-10-15', topic: 'Physics Mechanics' },
  ];

  const upcomingSessions = [
    { date: '2024-11-05', topic: 'Calculus Introduction' },
    { date: '2024-11-12', topic: 'Advanced Chemistry' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Sessions</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Previous Sessions</h3>
        <ul className="list-disc list-inside">
          {previousSessions.map((session, index) => (
            <li key={index} className="mb-1">
              {session.date} - {session.topic}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">Upcoming Sessions</h3>
        <ul className="list-disc list-inside">
          {upcomingSessions.map((session, index) => (
            <li key={index} className="mb-1">
              {session.date} - {session.topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SessionsSection;
