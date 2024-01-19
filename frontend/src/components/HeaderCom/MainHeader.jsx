import "./MainHeader.css";
import { useState, useEffect, useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faComment } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utils/userSlice";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MyContext from "../../context/MyContext";
import ChatPopup from "../../pages/Chatpopup";
import Logo from "../../utils/constants";
import ProfilePage from "../../pages/Profile/ProfilePage";
import { IoExitOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";


const MainHeader = () => {

  const context = useContext(MyContext);
  const { searchkey, setSearchkey,userCard,setUserCard } = context;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [isSticky, setSticky] = useState(false);
  const User = auth.currentUser;
  const [isChatOpen, setChatOpen] = useState(false);
  const [userCardOpen, setUserCardOpen] = useState(false);

  const userCardRef = useRef(null);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      dispatch(removeUser());
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  

  
  const openChat = () => {
    console.log('Opening chat...');
    setChatOpen(true);
  };

  const closeChat = () => {
    console.log('Closing chat...');
    setChatOpen(false);
  };
  const toggleUserCard = () => {
    setUserCardOpen((prev) => !prev);
  };

  const closeUserCard = () => {
    setUserCardOpen(false);
  };
  

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userCardRef.current && !userCardRef.current.contains(event.target)) {
        closeUserCard();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className={`${isSticky ? 'sticky' : ''}`}>
      <div className='container border-b border-solid border-rose-300 mr-1 w-auto flex flex-wrap justify-between' >
        <div className="header flex flex-wrap">
          <Link to="/" >
            <img src={Logo} alt="logo" className="h-12 m-4" />
          </Link>
        </div>
        <div className="flex justify-end ml-auto" >
    <ul className="flex m-6">
      <li><Link to="/" className="text-black hover:bg-gray-300 font-bold p-3 rounded-lg ">Home</Link></li>
        {user && (<li><Link to="/admin" className="text-black hover:bg-gray-300 font-bold p-3 rounded-lg">Admin</Link></li>) }
      {/* <li><Link to="/admin" className="text-black hover:bg-gray-300 font-bold p-3 rounded-lg">Admin</Link></li> */}

    </ul>
  </div>
        <div className="header2 flex flex-wrap mt-3 ">
          <div className="search-vehicle flex flex-wrap gap-5 mr-2 cursor-pointer">
            <div className="flex items-center border-2  rounded-md p-2 w-160 h-12">
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
            <p className='language mt-3'> ENGLISH </p>
            <FontAwesomeIcon icon={faCaretDown} className='search-icon-svg mt-4 w-6 h-6 -ml-[18px]' />
            
            {user ? (
              <> <div className="group rounded-dropdown mt-1">
                  <div className="rounded-[25px] h-12 w-12  bg-[#f75d34] border-t-black border-b-2 border-l-2 font-bold text-xl p-2" ref={userCardRef} onClick={()=>setUserCard(!userCard)}>
                    {User.email.charAt(0).toUpperCase()}

                  </div>
                  <div className="absolute h-50 w-50 bg-white border-l-2 border-b-2 border-transparent border-[#e0dfde] rounded-lg -ml-60">
                  {userCard &&  <ProfilePage/>}
                  </div>
                  
                  
                
               </div>
                <IoChatboxEllipsesOutline onClick={openChat} icon={faComment} className="user-chat mt-2 w-8 h-8" />
                {isChatOpen && <ChatPopup onClose={closeChat} />} 
                <IoExitOutline className="exite mt-2 h-8 w-8" onClick={handleSignOut} />
               
                </> 
            ) : (
              <Link to='/signIn'><FontAwesomeIcon
                
                icon={faUser}
                className="user-icon mt-2 w-8 h-8"
              /></Link>
            )}

           </div>
        </div>
      </div>
      
    </div>
     
   
  )
  }

export default MainHeader;