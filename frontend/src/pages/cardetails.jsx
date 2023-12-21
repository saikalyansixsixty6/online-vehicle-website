
import MainHeader from '../components/HeaderCom/MainHeader';
import './cardetails.css'
import { useLocation, useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChatPopup from '../pages/Chatpopup';
import { useState } from 'react';
import Footer from '../components/Footer/Footer';
import { auth } from '../utils/firebase';
import {doc,setDoc,collection} from "firebase/firestore"
import { fireDB } from '../utils/firebase';

    
function Cardetails() {
  const user = auth.currentUser;
  const {displayName,email} = user;
  const { id } = useParams();
  const location = useLocation();
  const vehicle = location.state ? location.state.vehicle : null;
  const [isChatOpen, setChatOpen] = useState(false);

  if (!vehicle) {

    return <p>Vehicle details not found.</p>;
  }

  const { title, imageUrl, price,description } = vehicle;
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
    
    const OnclickRequest = async()=>{
        
        const userDet= {
            displayName:displayName,
            email:email,
            title:title
    
        }
        try {
            const docRef = doc(collection(fireDB, 'request'));
        
            await setDoc(docRef, userDet);
            alert('Request sent successfully!');
          } catch (error) {
            alert('Error adding user data: ', error);
          }
     openChat()
    }
   
  return <>
     <MainHeader />
     <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
                <div className="relative h-96 md:h-auto">
                    <img src={imageUrl} alt="car_image" className="object-cover w-full h-full" />
                </div>
                <div className="p-6 md:p-8">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </div>
                    <div className="mb-6">
                        <p className="text-2xl font-semibold">{price}</p>
                        <p className="text-gray-600 text-sm">Avg. Ex-Showroom price</p>
                    </div>
                    <div className="mb-8">
                        <button onClick={OnclickRequest} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">
                            Request to Test Drive
                        </button>
                        {isChatOpen && <ChatPopup onClose={closeChat} />}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">{title} Price</h3>
                        <p className="text-gray-700">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    <Footer/>
    </>

}

export default Cardetails