import React, { useState } from 'react'
import './Chatpopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

import { faTimes, } from '@fortawesome/free-solid-svg-icons';



function Chatpopup({ onClose }) {


    return (
      <div className='chat-container'>
        <div className="chat-popup">
          <div className="chat-content">
            <p>Welcome to the chat!</p>
            <div className="chat-close-icon">
              <FontAwesomeIcon onClick={onClose} icon={faTimes} className='close-icon relative w-9 h-9 ml-80 -mt-7 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  Chatpopup.propTypes = {
    closeChat: PropTypes.func.isRequired,
  };
  
  export default Chatpopup;