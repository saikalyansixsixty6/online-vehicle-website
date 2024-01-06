
import MainHeader from '../components/HeaderCom/MainHeader';
import './cardetails.css'
import { useLocation, useParams } from 'react-router-dom';
import CarCard from '../shared/Carcard';
import MyContext from '../context/MyContext';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GiSteeringWheel } from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { GiHairStrands } from "react-icons/gi";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { LiaRupeeSignSolid } from "react-icons/lia";
import ChatPopup from '../pages/Chatpopup';
import { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import { auth } from '../utils/firebase';
import {doc,setDoc,collection} from "firebase/firestore"
import { fireDB } from '../utils/firebase';
import { FaBluetooth } from 'react-icons/fa';

    
function Cardetails() {
  const user = auth.currentUser;
  const {displayName,email} = user;
  const { id } = useParams();
  const location = useLocation();
  const vehicle = location.state ? location.state.vehicle : null;
  const [activeButton, setActiveButton] = useState('features');
//   const selectedVehicle = location.state ? location.state.selectedVehicle : null;

//   const context = useContext(MyContext);
  const [isChatOpen, setChatOpen] = useState(false);

//   if (!context || !context.cars || !Array.isArray(context.cars)) {
//     return <p>Cars data not available.</p>;
//   }
// const [allVehicles, setAllVehicles] = useState([]);

// const fetchData = async () => {
//   // Fetch all cars data or any other required data
//   // For now, let's just use a dummy array
//   const dummyAllCars = [
//     { id: '1', title: 'Car 1', imageUrl: 'url1', price: '$20000' },
//     { id: '2', title: 'Car 2', imageUrl: 'url2', price: '$25000' },
//     { id: '3', title: 'Car 3', imageUrl: 'url3', price: '$18000' },
//   ];

//   setAllVehicles(dummyAllCars);
// };

// useEffect(() => {
//   fetchData();
// }, []); // Fetch data on component mount
// const otherVehicles = selectedVehicle
// ? selectedVehicle.allVehicles.filter((v) => v.id !== id)
// : [];

  if (!vehicle) {
    return <p>Vehicle details not found.</p>;
  }
  const { title, imageUrl, price, description } =vehicle;
  
    console.log('Car ID:', id);
    console.log('Cardetails component rendering...');
    

    

    const handleButtonClick = (buttonType) => {
      setActiveButton(buttonType);
    };
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
     <div className="bg-[#fcfcfc]">
        <div className="border max-w-6xl h-auto ml-40 bg-[#ffffff] ">
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
                <button
                  className={`btn p-[6px] mt-5 w-[235px] rounded-3xl ${
                    activeButton === 'features' ? 'bg-[#f75d34] text-[#fdfdfd]' : 'bg-[#fdfdfd] text-[#f75d34]'
                  } `}
                  onClick={() => handleButtonClick('features')}
                >
                  Features
                </button>
                  <button
                    className={`btn p-[6px] m-6 w-[235px] rounded-3xl ${
                      activeButton === 'specifications'
                        ? 'bg-[#f75d34] text-white'
                        : 'bg-white text-[#f75d34]'
                    }`}
                    onClick={() => handleButtonClick('specifications')}
                  >
                    Specifications
                  </button>
            </div>

            <div className="container flex flex-wrap border-[#cdcaca] border-2  ml-11 w-[1000px] mt-1">
                <div className="img_section ">
                    <img src={imageUrl} alt="" className='img w-[500px] h-[400px]'/>
                </div>
                <div className="details ">
                    <div className="car_title ml-8 text-left  font-bold text-2xl mt-3">
                        <span >{title}</span>
                        <div className="stars rounded-2xl p-[2px] space-x-1 cursor-pointer">
                            <FontAwesomeIcon icon={faStar} className='star w-4 h-4 text-[#ffa236] ' />
                            <FontAwesomeIcon icon={faStar} className='star w-4 h-4 text-[#ffa236]' />
                            <FontAwesomeIcon icon={faStar} className='star w-4 h-4 text-[#ffa236]' />
                            <FontAwesomeIcon icon={faStar} className='star w-4 h-4 text-[#ffa236]' />
                            <FontAwesomeIcon icon={faStar} className='star w-4 h-4 text-[#f0ebe6]' />
                            <span className='rating text-xs'>4.3</span>
                        </div>
                    </div>
                    <div className="price_details flex flex-wrap space-x-1 text-lg text-left ml-8 mt-3 font-bold">
                        <LiaRupeeSignSolid className='p mt-1' /> 
                        <span>{price} *</span>
                    </div>
                    <p className="text-gray-600 text-left ml-8 text-[12px]">*Avg. Ex-Showroom price</p>
                    <div className="container_box border-gray-500 border-3  grid grid-cols-2 gap-5 mt-[60px] ml-8">
                        <div className="features_details flex flex-wrap space-x-1 ">
                        <GiSteeringWheel className='p mt-1'/>
                        <span>Steering Mounted Controls</span>
                        </div>
                        <div className="features_details flex flex-wrap space-x-1  ">
                        <FaBluetooth className='p mt-1' />
                        <span>Bluetooth Compatibility</span>
                        </div>
                        <div className="features_details flex flex-wrap space-x-1 ">
                        <MdAir className='p mt-1'/>
                        <span>Air Conditioner</span>
                        </div>
                        <div className="features_details flex flex-wrap space-x-1">
                        <GiHairStrands className='p mt-1' />
                        <span>Rear Defogger</span>
                        </div>
                        
                    </div>
                    <div className="bt_n mb-1 text-left ml-8">
                        <button onClick={OnclickRequest} className="bg-[#f75d34] m-[3px] text-white font-bold py-3 px-6 rounded-[5px] mt-[50px]">
                            Request to Test Drive
                        </button>
                        {isChatOpen && <ChatPopup onClose={closeChat} />}
                    </div>
                    
                </div>
            </div>
            <div className="car_description m-8 text-left ">
                <div className="car_title_desc font-bold text-lg ">
                    <span className='t hover:text-xl   hover:text-[#f75d34] cursor-pointer'>{title} </span>
                </div>
                <div className="description mt-5">
                    <span>{description}</span>
                </div>
            </div>
        </div>
        <div className="Future_Spacifications border max-w-6xl h-auto ml-40 bg-[#ffffff] mt-4">
        <div className="Other_car_title text-left mt-4 ml-8 font-semibold text-lg"><span>Specifications of {title} car </span></div>
            <div className="car_futures_details mt-4 ml-[150px] grid grid-cols-3 gap-7 ">
               <div className="features_details flex flex-wrap space-x-2  ">
               <GiSteeringWheel className='p mt-1'/>
                <span>Steering Mounted Controls</span>
                </div>
                <div className="features_details flex flex-wrap space-x-2  ">
                <FaBluetooth className='p mt-1' />
                <span>Bluetooth Compatibility</span>
                </div>
                <div className="features_details flex flex-wrap space-x-2 ">
                <MdAir className='p mt-1'/>
                <span>Air Conditioner</span>
                </div>
                <div className="features_details flex flex-wrap space-x-2">
                <GiHairStrands className='p mt-1' />
                <span>Rear Defogger</span>
                </div>
                <div className="features_details flex flex-wrap space-x-2">
                <GiSteeringWheel className='p mt-1'/>
                <span>Steering Mounted Controls</span>
                </div>
                <div className="features_details flex flex-wrap space-x-2  ">
                <FaBluetooth className='p mt-1' />
                <span>Bluetooth Compatibility</span>
                </div>
                <div className="features_details flex flex-wrap space-x-2 ">
                <MdAir className='p mt-1'/>
                <span>Air Conditioner</span>
                </div>
                <div className="features_details flex flex-wrap space-x-2">
                <GiHairStrands className='p mt-1' />
                <span>Rear Defogger</span>
               </div>
            </div>
        </div>
        <div className="other_cars border max-w-6xl h-auto ml-40 bg-[#ffffff] mt-4">
            <div className="Other_car_title text-left ml-8 font-semibold text-lg"><span>People who viewed {title} also viewed this cars</span></div>
            <div className="cars_card">
              {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[selectedVehicle, ...allVehicles].map((vehicle) => (
                  <div key={vehicle.id}>
                    <CarCard id={vehicle.id} vehicle={vehicle} />
                  </div>
                ))}
              </div> */}
            </div>
        </div>
</div>



    <Footer/>
    </>

}

export default Cardetails