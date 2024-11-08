// firebaseService.js
import{  db  }from './firbaseConfig';
import firebase from 'firebase/app';

// Function to create a new chat session
export const createChatSession = async (studentId, teacherId) => {
  const sessionRef = db.collection('ChatSessions').doc();
  const sessionData = {
    studentId,
    teacherId,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  await sessionRef.set(sessionData);
  return sessionRef.id;
};

// Function to send a message
export const sendMessage = async (sessionId, senderId, receiverId, message) => {
  const messageData = {
    senderId,
    receiverId,
    message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  };
  const messageRef = db.collection('ChatSessions').doc(sessionId).collection('messages').doc();
  await messageRef.set(messageData);
  return messageRef.id;
};

// Function to get all messages for a session
export const getMessages = async (sessionId) => {
  const messages = [];
  const messagesRef = db.collection('ChatSessions').doc(sessionId).collection('messages').orderBy('timestamp', 'asc');
  const snapshot = await messagesRef.get();
  snapshot.forEach(doc => {
    messages.push({ id: doc.id, ...doc.data() });
  });
  return messages;
};
