import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="message-input w-full flex justify-between ">
      <input
        className="w-full h-10 bg-gray-200 p-2 rounded-sm"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
      />
      <button onClick={handleSendMessage} className="bg-green-400 p-2 rounded-sm hover:text-white hover:bg-green-800">Send</button>
    </div>
  );
};

export default MessageInput;
