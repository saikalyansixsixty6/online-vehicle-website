
import  { useState} from 'react';
import { Card, CardBody} from 'reactstrap';
import '../shared/carcard.css';
import ChatPopup from '../pages/Chatpopup';
import PropTypes from 'prop-types';

const CarCard = ({ vehicle }) => {
 
  const [isChatOpen, setChatOpen] = useState(false);
  
  const { title, imageUrl, price } = vehicle;
  

  const openChat = () => {
    console.log('Opening chat...');
    setChatOpen(true);
  };

  const closeChat = () => {
    console.log('Closing chat...');
    setChatOpen(false);
  };

  return (
    <>
      <div className='car_container'>
        <Card className='car_box'>
          <div className='car_img'>
            <img src={imageUrl} alt='car-img' />
          </div>
        </Card>
        <CardBody className='car_info'>
          <p className='brand text-lefd'>{title}</p>
          <p>{price}</p>

          <button onClick={openChat}>Request to Test Drive</button>
          {isChatOpen && <ChatPopup onClose={closeChat} />}
        </CardBody>
      </div>
    </>
  );
};

CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarCard;