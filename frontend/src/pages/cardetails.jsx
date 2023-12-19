
import MainHeader from '../components/HeaderCom/MainHeader';
import './cardetails.css'
import { useParams } from 'react-router-dom';
import car5 from '../Assets/images/car5.jpg'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

    
function Cardetails() {
    const { id } = useParams();
    console.log('Car ID:', id);
    console.log('Cardetails component rendering...');
   
  return <>
     <MainHeader />
    <div className="div">
        <div className="car_box">
            <div className="vehicle_title text-left ml-0 mt-3">
                <span className='title '> Marothi</span><br />
               
            </div>
            <div className="stars text-left space-x-1">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="vehicle_image_details  flex flex-wrap gap-6">
                <div className="vehicle_image">
                    <div className="image">
                        <img src={car5} alt=""  className='image_size '/>
                    </div>

                </div>
                <div className="vehicle_details text-left">
                    <div className="price mt-3 pt-12  ">
                        <span>Rs 14- 30 Lakh *</span>
                    </div>
                        <span>Avg. Ex-Showroom price</span>
                    <div className="button">
                    <button >Request to Test Drive</button>
                      {/* {isChatOpen && <ChatPopup onClose={closeChat} />} */}
                    </div>
                </div>
                

            </div>
            <div className="vehicle_f_details text-left mt-5">
                    <div className="vehicle_name ">
                        <p> Maruthi Price</p>
                    </div>
                    <div className="vehicle-para mr-72 mt-3">
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                    </div>
                </div>


                <div className="vehicle_f_details text-left mt-5">
                    <div className="vehicle_name ">
                        <p> Maruthi Price</p>
                    </div>
                    <div className="vehicle-para mr-72 mt-3">
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                        <p>Rolls-Royce Cullinan price for the base model is Rs. 6.95 Crore (Avg. ex-showroom). Cullinan price for 1 variant is listed below.</p>
                    </div>
                </div>

        </div>
    </div>
    </>
}

export default Cardetails