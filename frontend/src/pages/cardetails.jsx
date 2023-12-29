
import MainHeader from '../components/HeaderCom/MainHeader';
import './cardetails.css'
import { useLocation, useParams } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
     <div className="bg-[#f7f7f7]">
        <div className="border max-w-6xl h-auto ml-40 ">
            <div className="feature_header text-left ml-11 text-2xl font-bold mt-5">
                <span>Features and Specifications</span>
            </div>
            <div className="search_bar text-left ml-11 mt-4">
               <FontAwesomeIcon
                icon={faSearch}
                className="ml-2 absolute w-8  h-8 mt-2 text-gray-500 cursor-pointer"
              />
                <input type="text" placeholder='Search for features & specifications' className='search_input w-[500px] h-12 text-center border-[#cdcaca] border-2 rounded-xl' />
            </div>
            <div className="button text-left ml-8 text-2xl ">
                <button className='btn mt-6 rounded-3xl  border-[#cdcaca] border-2 text-[#605b5b] bg-[#efe9e9] hover:bg-[#5c67cd] hover:text-white'>Features</button>
                <button className='btn m-6 rounded-3xl  border-[#cdcaca] border-2 text-[#605b5b] bg-[#efe9e9] hover:bg-[#5c67cd] hover:text-white'>Specifications</button>
            </div>

            <div className="container flex flex-wrap border-[#cdcaca] border-2  ml-11 w-[1000px] mt-5">
                <div className="img_section ">
                    <img src={imageUrl} alt="" className='img w-[500px] h-[400px]'/>
                </div>
                <div className="details ">
                    <div className="car_title ml-[200px] flex flex-wrap space-x-5 font-bold text-2xl mt-3">
                        <span>{title}</span>
                        <div className="stars rounded-2xl p-[2px] w-11 h-9 bg-[#00afa0]">
                            <FontAwesomeIcon icon={faStar} className='star w-4 h-4 ' />
                            <span className='rating text-xs'>4.3</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div> */}
</div>



    <Footer/>
    </>

}

export default Cardetails