import React, { useState } from 'react'

function Chatpopup({ isOpen, toChat }) {
    
  
    return (
        <div className='chat-container'>
             <div className="chat-popup">
                <button className="close-button" onClick={toChat}>
                    Close
                </button>
                <div className="chat-content">
                
                    <p>Welcome to the chat!</p>
                </div>
            </div>
        </div>
  );
  }
  

export default Chatpopup