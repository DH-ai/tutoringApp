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
    <div>
      <h2>My Sessions</h2>
      
      <div>
        <h3>Previous Sessions</h3>
        <ul>
          {previousSessions.map((session, index) => (
            <li key={index}>
              {session.date} - {session.topic}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3>Upcoming Sessions</h3>
        <ul>
          {upcomingSessions.map((session, index) => (
            <li key={index}>
              {session.date} - {session.topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SessionsSection;
