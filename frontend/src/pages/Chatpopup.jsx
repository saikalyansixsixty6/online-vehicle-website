
import './Chatpopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPaperPlane, faTimes, } from '@fortawesome/free-solid-svg-icons';



function Chatpopup({ onClose }) {


    return (
      <div className='chat-container'>
        <div className="chat-popup">
          <div className="chat-content">
            <p>Welcome to Chat Support!</p>
            <div className="chat-close-icon">
              <FontAwesomeIcon onClick={onClose} icon={faTimes} className='close-icon relative w-9 h-9 ml-96 -mt-7 cursor-pointer' />
            </div>
            <div className="chat_text_box  ">
                <div className="input_box absolute ">
    
                    <input type="text" placeholder='Type a Message here' className='input_text h-11 w-72 text-left pl-4'/>
                    <FontAwesomeIcon icon={faPaperPlane} className='send_icon ml-4 cursor-pointer' />
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  
 
  
  export default Chatpopup;