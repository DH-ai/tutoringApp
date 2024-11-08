import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import MessageView from "../componenets/messageView";
import { createChatSession, sendMessage, getMessages } from "../utils/webchat";

const base = process.env.REACT_APP_BACKEND_URL;

const ChatApp = (userid, role) => {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [webSocket, setWebSocket] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  // Replace with actual student and teacher IDs
  const user1 = userid;
  const user2 = localStorage.getItem("user_id");

  // Create a session when component mounts
  useEffect(() => {
    const startChat = async () => {
      const id = await createChatSession(studentId, teacherId);
      setSessionId(id);
    };
    startChat();
  }, [user1, user2]);

  // Establish WebSocket connection when sessionId is available
  useEffect(() => {
    if (sessionId) {
      const fetchMessages = async () => {
        const msgs = await getMessages(sessionId);
        setMessages(msgs);
      };
      fetchMessages();
    }
  }, [sessionId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await sendMessage(sessionId, studentId, teacherId, newMessage);
      setNewMessage('');
      const msgs = await getMessages(sessionId);
      setMessages(msgs);
    }
  };
  // Function to send a message through WebSocket


  return (
    <div className="chat-app h-full w-full mr-10  bg-slate-100  ">
      <MessageView messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
