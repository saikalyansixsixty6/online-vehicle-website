import "./MainHeader.css";
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utils/userSlice";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MyContext from "../../context/MyContext";
import Logo from '../../utils/vehicleMart.jpeg'
import ChatPopup from "../../pages/Chatpopup";



const MainHeader = () => {

  const context = useContext(MyContext);
  const { searchkey, setSearchkey } = context;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const User = auth.currentUser;
  const [isChatOpen, setChatOpen] = useState(false);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      dispatch(removeUser());
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  const toggleDropdown1 = () => {
    setDropdownOpen(!isDropdownOpen);
    console.log('succes0')
   
  };

  
  const openChat = () => {
    console.log('Opening chat...');
    setChatOpen(true);
  };

  const closeChat = () => {
    console.log('Closing chat...');
    setChatOpen(false);
  };
  // const closeDropdownsOnClickOutside = (event) => {
  //   if (!event.target.closest('.rounded') && !event.target.closest('.rx-dropdown-menu') ) {
  //     setDropdownOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', closeDropdownsOnClickOutside);
  //   return () => {
  //     document.removeEventListener('click', closeDropdownsOnClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${isSticky ? 'sticky' : ''}`}>
      <div className='container border-b border-solid border-rose-300 mr-1 w-auto flex flex-wrap justify-between' >
        <div className="header flex flex-wrap">
          <Link to="/home" >
            <img src={Logo} alt="logo" className="h-12 m-4" />
          </Link>
        </div>
        <div className="header2 flex flex-wrap mt-3 ">
          <div className="search-vehicle flex flex-wrap gap-5 mr-2 cursor-pointer">
            <div className="flex items-center border-2 border-solid border-black rounded-md p-2 w-100 h-12">
              <input
                type="text"
                placeholder="Search for vehicles"
                value={searchkey}
                onChange={(e) => setSearchkey(e.target.value)}
                className="w-full outline-none focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="ml-2 text-gray-500 cursor-pointer"
              />
            </div>
            <p className='language mt-4'> ENGLISH </p>
            <FontAwesomeIcon icon={faCaretDown} className='search-icon-svg mt-4 w-6 h-6 ml-0' />

            {user ? (
              <> <div className="group rounded-dropdown">
                  <div className="rounded-full h-12 w-12 bg-black text-white font-bold text-xl p-2">
                    {User.email.charAt(0).toUpperCase()}
                  </div>
                <div className="dropdown-content hidden mt-2 -ml-3  bg-white shadow-lg rounded-md">
                  <ul>
                    <li>
                      <Link to="/profile"  className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">Profile</Link>
                    </li>
                    <li>
                      <Link to="/admin"  className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">Admin</Link>
                    </li>
                  </ul>
                </div>
               </div>
                <FontAwesomeIcon onClick={openChat} icon={faComment} className="user-chat mt-2 w-8 h-8" />
                {isChatOpen && <ChatPopup onClose={closeChat} />} 
                <FaSignInAlt className="h-10 w-10 mx-auto" onClick={handleSignOut} />
               
              </>
            ) : (
              <FontAwesomeIcon
                onClick={toggleDropdown1}
                icon={faUser}
                className="user-icon mt-2 w-8 h-8"
              />
            )}

           
        </div>
      </div>
      <div className="header-category mt-5 pl-10 flex flex-wrap gap-16 pb-5">
        <div className="categories  relative category">
          <p className="cursor-pointer">
            All Categories :
          </p>
        </div>
        <p>Cars</p>
        <p>Motor Cycles</p>
        <p>Scooters</p>
        <p>Commercial & Other Vehcles</p>
      </div>
    </div>
    </div>
  )
  }

export default MainHeader;