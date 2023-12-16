import React, { useState, useEffect } from 'react';
import './Chatpopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { fireDB } from '../utils/firebase'; 
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

function Chatpopup({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const messagesRef = collection(fireDB, 'messages');

    const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setMessages(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const messagesRef = collection(fireDB, 'messages');
      await addDoc(messagesRef, {
        text: newMessage,
        sender: 'user',
        timestamp: new Date(),
      });
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-popup">
        <div className="chat-content">
          <p>Welcome to Chat Support!</p>
          <div className="chat-close-icon">
            <FontAwesomeIcon onClick={onClose} icon={faTimes} className="close-icon relative w-9 h-9 ml-96 -mt-7 cursor-pointer" />
          </div>
          <div className="chat_text_box">
            <div className="messages-container">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>
          </div>
          <div className="input_box absolute">
              <input
                type="text"
                placeholder="Type a Message here"
                className="input_text h-11 w-72 text-left pl-4"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <FontAwesomeIcon icon={faPaperPlane} onClick={handleSendMessage} className="send_icon ml-4 cursor-pointer" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Chatpopup;
