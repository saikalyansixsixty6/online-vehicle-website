import React, { useState, useContext } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import '../shared/carcard.css';
import ChatPopup from '../pages/Chatpopup';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

const CarCard = ({ car }) => {
  // const { BrandName, photo, price } = car;
  const [isChatOpen, setChatOpen] = useState(false);
  const context = useContext(MyContext);
  const { vehicles } = context;

  const { imageUrl, category, description } = vehicles;

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
          <p className='brand text-lefd'>{}</p>
          <p>{}</p>

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