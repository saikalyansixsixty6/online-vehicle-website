
import MainHeader from '../components/HeaderCom/MainHeader';
import './cardetails.css'
import { useLocation, useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChatPopup from '../pages/Chatpopup';
import { useState } from 'react';
import Footer from '../components/Footer/Footer';
    
function Cardetails() {
    const { id } = useParams();
  const location = useLocation();
  const vehicle = location.state ? location.state.vehicle : null;
  const [isChatOpen, setChatOpen] = useState(false);

  if (!vehicle) {

    return <p>Vehicle details not found.</p>;
  }

  const { title, imageUrl, price } = vehicle;
    console.log('Car ID:', id);
    console.log('Cardetails component rendering...');

    
  
    const openChat = () => {
      console.log('Opening chat...');
      setChatOpen(true);
    };
  
    const closeChat = () => {
      console.log('Closing chat...');
      setChatOpen(false);
    };
   
  return <>
     <MainHeader />
    <div className="div">
        <div className="car_box">
            <div className="vehicle_title text-left ml-0 mt-3">
                <span className='title '> {title}</span><br />
               
            </div>
            <div className="stars text-left space-x-1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="vehicle_image_details gap-6">
                <div className="vehicle_image">
                    <div className="image">
                        <img src={imageUrl} alt="car_image"  className='image_size '/>
                    </div>

                </div>
                <div className="vehicle_details text-left">
                    <div className="price mt-3 pt-12  ">
                        <span>Rs {price} *</span>
                    </div>
                        <span>Avg. Ex-Showroom price</span>
                    <div className="button">
                    <button onClick={openChat} >Request to Test Drive</button>
                       {isChatOpen && <ChatPopup onClose={closeChat} />} 
                    </div>
                </div>
                

            </div>
            <div className="vehicle_f_details text-left mt-5">
                    <div className="vehicle_name ">
                        <p> {title} Price</p>
                    </div>
                    <div className="vehicle-para mr-7 mt-3">
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                    </div>
                </div>


              

        </div>
    </div>
    <Footer/>
    </>

}

export default Cardetails