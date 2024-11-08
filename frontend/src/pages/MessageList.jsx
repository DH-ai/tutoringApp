import React from 'react';

const MessageList = ({ messages }) => (
  <div className="message-list">
    {messages.map((msg) => (
      <div key={msg.message_id} className="message">
        <strong>{msg.sender_id === 'your-student-id' ? 'You' : 'Teacher'}:</strong> {msg.message}
      </div>
    ))}
  </div>
);

export default MessageList;
