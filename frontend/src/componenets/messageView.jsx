import React from 'react';

// a box to view past conversations
const MessageView = ({ messages }) => {
    return (
        <div className="message-view h-4/5 w-full bg-white">
            {messages.map((message, index) => (
                <div key={index} className="message">
                    <p>{message.text}</p>
                    <span>{message.timestamp}</span>
                </div>
            ))}
        </div>
    );
};

export default MessageView;