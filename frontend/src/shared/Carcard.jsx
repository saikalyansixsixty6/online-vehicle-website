
import {Card, CardBody} from 'reactstrap';
import '../shared/carcard.css'
import ChatPopup from '../pages/Chatpopup';
import { useState } from 'react';
import PropTypes from 'prop-types';

const CarCard = ({car}) => {
    const { BrandName,photo,price }=car;
    const [isChatOpen, setChatOpen] = useState(false);

    const openChat = () => {
      console.log('Opening chat...');
      setChatOpen(true);
    };
    
    const closeChat = () => {
      console.log('Closing chat...');
      setChatOpen(false);
    };

  return <>
    <div className="car_container">
        <Card className="car_box">
          <div className="car_img">
            <img src={photo} alt="car-img" />
          </div>
        </Card>
        <CardBody className="car_info">
          <p className="brand text-lefd">{BrandName}</p>
          <p>{price}</p>
          <button onClick={openChat}>Request to Test Drive</button> 
          {isChatOpen && <ChatPopup onClose={closeChat} />}  
        </CardBody>
      </div>
    </>
}
CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};
export default CarCard;