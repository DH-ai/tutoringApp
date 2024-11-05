import React from 'react';

function MessagesSection() {
  const recentContacts = [
    { name: 'Teacher A', lastMessage: 'Looking forward to our next session!' },
    { name: 'Teacher B', lastMessage: 'Please review the assignments.' },
  ];

  return (
    <div>
      <h2>My Messages</h2>
      <ul>
        {recentContacts.map((contact, index) => (
          <li key={index}>
            <strong>{contact.name}:</strong> {contact.lastMessage}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessagesSection;
