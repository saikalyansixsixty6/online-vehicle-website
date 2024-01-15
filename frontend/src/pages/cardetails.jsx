
import MainHeader from '../components/HeaderCom/MainHeader';
import './cardetails.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import CarCard from '../shared/Carcard';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GiSteeringWheel } from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { GiHairStrands } from "react-icons/gi";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { LiaRupeeSignSolid } from "react-icons/lia";
import ChatPopup from '../pages/Chatpopup';
import {  useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import { auth } from '../utils/firebase';
import {doc,setDoc,collection} from "firebase/firestore"
import { fireDB } from '../utils/firebase';
import { FaBluetooth } from 'react-icons/fa';
import { MdAppRegistration } from "react-icons/md";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FcNext } from "react-icons/fc";



function Cardetails() {
  const user = auth.currentUser;
  const {displayName,email} = user || {};
  const location = useLocation();
  const vehicle = location.state ? location.state.vehicle : null;
  const [activeButton, setActiveButton] = useState('features');
  const [isChatOpen, setChatOpen] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleScroll);
    return () => {
      window.removeEventListener('popstate', handleScroll);
    };
  }, []);

    
    if (!vehicle) {
      return <p>Vehicle details not found.</p>;
    }
    const { title, imageUrl, price, description,fuelType, gearType, purchasedYear, kilometers  } =vehicle;
    const otherVehicles =location.state ? location.state.otherVehicles : []; 

    const handleButtonClick = (buttonType) => {
      setActiveButton(buttonType);
      if (buttonType === 'specifications') {
        const featureSection = document.getElementById('feature_section');
        if (featureSection) {
          featureSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    const openChat = () => {
      setChatOpen(true);
    };
  
    const closeChat = () => {
      setChatOpen(false);
    };
    
    const OnclickRequest = async()=>{
      if (!user) {
        console.log("User not logged in. Redirecting to login page...");
        // You can replace '/login' with the actual path of your login page
        Navigate('/signIn');
        return; }
      
        const userDet= {
            displayName:displayName,
            email:email,
            title:title
    
        }
        try {
            const docRef = doc(collection(fireDB, 'request'));
            alert("Request sent successfully!!!")
            await setDoc(docRef, userDet);
          
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
                    <FcNext  className='slide_bt absolute mt-[-220px] ml-[450px] w-12  h-12 text-gray-50' />
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
                       {user ? 'Request to Test Drive' : 'LogIn to Request Test Drive'}
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
        <div className="Future_Spacifications  border max-w-6xl h-auto ml-40 bg-[#ffffff] mt-4" id="feature_section">
        <div className="Other_car_title text-left mt-4 ml-8 font-semibold text-lg"><span>Specifications of {title} car </span></div>
            <div className="car_futures_details mt-4 ml-[150px] grid grid-cols-3 gap-7 ">
               <div className="features_details flex flex-wrap space-x-2  ">
                  <MdAppRegistration className='p mt-1'/>
                  <div className="reg">
                    <span>Reg Year</span><br />
                    <span> Oct 2016</span>
                  </div>
                </div>
                <div className="features_details flex flex-wrap space-x-2  ">
                    <FaBuildingCircleCheck className='p mt-1' />
                    <div className="com">
                      <span>Make Year</span><br />
                      <span>{purchasedYear}</span>
                    </div>
                </div>
                <div className="features_details flex flex-wrap space-x-2 ">
                  <FaRoad  className='p mt-1'/>
                  <div className="reg-nu">
                    <span>Reg Nunmber</span><br />
                    <span>DL8c-AC6413</span>
                  </div>
                </div>
                <div className="features_details flex flex-wrap space-x-2">
                  <PiEngineFill className='p mt-1' />
                  <div className="eng">
                    <span>Engine Capacity</span><br />
                    <span>1199 cc</span>
                  </div>
                </div>
                <div className="features_details flex flex-wrap space-x-2">
                  <IoShieldCheckmark className='p mt-1'/>
                  <div className="insu text-left">
                    <span>Insurance</span><br />
                    <span>Comprehensive,Valid till Sep-2024</span>
                  </div>
                </div>
                <div className="features_details flex flex-wrap space-x-2  ">
                  <FaKey className='p mt-1' />
                  <div className="spare">
                    <span>Spare Key</span><br />
                    <span>Yes</span>
                  </div>
                </div>
                <div className="features_details flex flex-wrap space-x-2 ">
                  <AiFillSetting className='p mt-1'/>
                  <div className="trans">
                    <span>Transmission</span><br />
                    <span>{gearType}</span>
                  </div>
                </div>
                <div className="features_details flex flex-wrap space-x-2">
                  <BsFillFuelPumpFill className='p mt-1' />
                  <div className="fuel">
                    <span>Fuel Type</span><br />
                    <span>{fuelType}</span>
                  </div>
               </div>
            </div>
        </div>
        <div className="other_cars border max-w-6xl h-auto ml-40 bg-[#ffffff] mt-4">
            <div className="Other_car_title text-left ml-8 font-semibold text-lg"><span>People who viewed {title} also viewed this cars</span></div>
            <div className="cars_card">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {otherVehicles && otherVehicles.length > 0 ? (
                  otherVehicles.map((otherVehicle) => (
                    <div key={otherVehicle.id}>
                      <Link
                        to={{
                          pathname: `/car_details/${otherVehicle.id}`,
                          state: { vehicle: otherVehicle },
                        }}
                      >
                        <CarCard vehicle={otherVehicle} />
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>No other cars to display</p>
                )}
              </div>
            </div>
        </div>
</div>



    <Footer/>
    </>

}

export default Cardetails