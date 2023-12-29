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
import ChatPopup from "../../pages/Chatpopup";
import Logo from "../../utils/constants";
import ProfilePage from "../../pages/Profile/ProfilePage";


const MainHeader = () => {

  const context = useContext(MyContext);
  const { searchkey, setSearchkey,userCard,setUserCard } = context;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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

  

  
  const openChat = () => {
    console.log('Opening chat...');
    setChatOpen(true);
  };

  const closeChat = () => {
    console.log('Closing chat...');
    setChatOpen(false);
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
      <li><Link to="/admin" className="text-black hover:bg-gray-300 font-bold p-3 rounded-lg">Admin</Link></li>
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
            <p className='language mt-4'> ENGLISH </p>
            <FontAwesomeIcon icon={faCaretDown} className='search-icon-svg mt-4 w-6 h-6 ml-0' />
            
            {user ? (
              <> <div className="group rounded-dropdown">
                  <div className="rounded-full h-12 w-12 bg-black text-white font-bold text-xl p-2" onClick={()=>setUserCard(!userCard)}>
                    {User.email.charAt(0).toUpperCase()}

                  </div>
                  <div className="absolute h-50 w-50 bg-slate-400 rounded-lg -ml-20">
                  {userCard &&  <ProfilePage/>}
                  </div>
                  
                  
                
               </div>
                <FontAwesomeIcon onClick={openChat} icon={faComment} className="user-chat mt-2 w-8 h-8" />
                {isChatOpen && <ChatPopup onClose={closeChat} />} 
                <FaSignInAlt className="h-10 w-10 mx-auto" onClick={handleSignOut} />
               
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