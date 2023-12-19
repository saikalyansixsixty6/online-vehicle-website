import "./MainHeader.css"
// import Ellips from '../../Assets/images/img.png'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faUser,faComment,faAngleDown} from "@fortawesome/free-solid-svg-icons"
import Logo from "../../utils/vehicleMart.jpeg"
import { Link, useNavigate} from "react-router-dom"
import { auth } from "../../utils/firebase"
import { FaSignInAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector} from "react-redux"
import { removeUser } from "../../utils/userSlice"
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const MainHeader = ()=>{
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const[isDropdownOpenCategory, setDropdownOpenCategory]=useState(false)
  const [isSticky, setSticky] = useState(false);
  const User = auth.currentUser;
  
  const user = useSelector((store) => store.user);

  const handleSignOut = ()=>{
    
    signOut(auth).then(() => {
    // Sign-out successful.
      navigate("/")
      dispatch(removeUser())
    
     }).catch((error) => {
      // An error happened.
     });

 }


  const toggleDropdown1 = () => {
    console.log('succes')
    setDropdownOpen(!isDropdownOpen);
    setDropdownOpenCategory(false);
  };
  const toggleDropdown = () => {
    setDropdownOpenCategory(!isDropdownOpenCategory);
    setDropdownOpen(false);
  };
  const closeDropdownsOnClickOutside = (event) => {
    if (!event.target.closest('.user-icon') && !event.target.closest('.categories')) {
      setDropdownOpen(false);
      setDropdownOpenCategory(false);
    }
  }
    // useEffect(()=>{
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       const {uid,email,displayName,photoURL} = user.uid;
    //       dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    //       navigate("/home")
 
 
 
          
    //     } else {
          
    //       dispatch(removeUser())
    //       navigate("/")
          
    //     }
    //   });
 
    //   return ()=> unsubscribe();
    // })

    useEffect(() => {
      document.addEventListener('click', closeDropdownsOnClickOutside);
      return () => {
        document.removeEventListener('click', closeDropdownsOnClickOutside);
      };
    }, []);

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
  return <>
  
  <div className={`${isSticky ? 'sticky' : ''}`}>
    <div className='container  mr-1 w-auto flex flex-wrap justify-between' >
      <div className="header flex flex-wrap">
        <Link to="/home" >
          <img src={Logo} alt="logo" className="h-12 m-4" />
        </Link>
      </div>
      <div className="header2 flex flex-wrap mt-3 ">

      <div className="search-vahcle flex flex-wrap gap-5 mr-2 cursor-pointer">
        <div className="flex items-center border-2 border-solid border-black rounded-md p-2 w-100 h-12">
        <input
        type="text"
        placeholder="Search for vehicles"
        className="w-full outline-none focus:outline-none"
        />
           <FontAwesomeIcon
        icon={faSearch}
        className="ml-2 text-gray-500 cursor-pointer"
          />
      </div>
          <p className='language mt-4'> ENGLISH </p>
          <FontAwesomeIcon icon={faCaretDown} className='search-icon-svg mt-4 w-6 h-6 ml-0'/>

          {user ? (
                <>
                  <div className="rounded-full h-12 w-12 bg-black text-white font-bold text-xl p-2" >
                   <FontAwesomeIcon
                    onClick={user ? toggleDropdown1 : undefined}
                   icon={faUser}
                   className="user-icon mt-2 w-8 h-8"
                 />
                    {User.email.charAt(0).toUpperCase()}
                  </div>
                  <FontAwesomeIcon icon={faComment}  className="user-chat mt-2 w-8 h-8" />
                  <FaSignInAlt className="h-10 w-10 mx-auto" onClick={handleSignOut} />
                 
                </>
              ) : (
                
                <FontAwesomeIcon
                onClick={user ? toggleDropdown1 : undefined}
               icon={faUser}
               className="user-icon mt-2 w-8 h-8"
             />
              )}

              {isDropdownOpen && (
                <div className="dropdown absolute ml-80 mt-14  bg-white shadow-lg rounded-md">
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white"
                      >
                        Admin
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
             
            </div>
            <div className="user-icons"></div>
          </div>
        </div>
    <div className="header-category mt-5 pl-10 flex flex-wrap gap-16 pb-5">
          <div className="categories  relative category">
            <p onClick={toggleDropdown} className="cursor-pointer">
              All Categories
              <FontAwesomeIcon icon={faAngleDown} className='dropdown-icon ml-2 mt-1' />
            </p>
            {isDropdownOpenCategory && (
              <div className="dropdown absolute mt-2 bg-white shadow-lg rounded-md">
                <ul className="py-1">
                  <li>
                    <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a href="/`" className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">
                      Category 3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <p>Cars</p>
          <p>Motor Cycles</p>
          <p>Scooters</p>
          <p>Commercial & Other Vehcles</p>
        </div>
    </div>
  </>
}

export default MainHeader;