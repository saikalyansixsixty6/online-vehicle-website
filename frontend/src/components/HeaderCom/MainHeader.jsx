import "./MainHeader.css"
import Ellips from '../../Assets/images/img.png'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCaretDown,faUser,faComment,faAngleDown} from "@fortawesome/free-solid-svg-icons"


const MainHeader = ()=>{
  
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const[isDropdownOpenCategory, setDropdownOpenCategory]=useState(false)
  const [isSticky, setSticky] = useState(false);

  const toggleDropdown1 = () => {
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
        <div className="logo ">
          <img src={Ellips} alt="logo" className='ml-5' />
        </div>
        <div className="search-location ml-5 mt-4">
          <input type="text" placeholder='India' />
          <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon-svg'/>
          
          </div>
        </div>
      </div>
      <div className="header2 flex flex-wrap mt-3 ">

        <div className="search-vahcle flex flex-wrap gap-5 mr-2 cursor-pointer">
          <input type="text" placeholder='Search for vehcles' id='' className='search-cars '/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon-svg3'/>
          <p className='language mt-4'> ENGLISH </p>
          <FontAwesomeIcon icon={faCaretDown} className='search-icon-svg mt-4 w-6 h-6 ml-0'/>
          <FontAwesomeIcon onClick={toggleDropdown1} icon={faUser} className='user-icon mt-2 w-8 h-8'/>
          {/* user-icon dropdown */}
          {isDropdownOpen && (
                <div className="dropdown absolute ml-80 mt-14  bg-white shadow-lg rounded-md">
                  <ul className="py-1">
                    <li>
                      <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="/admin" className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">
                        Admin
                      </a>
                    </li>
                    <li>
                      <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-rose-200 hover:text-white">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
          <FontAwesomeIcon icon={faComment} className='user-chat mt-2 w-8 h-8'/>
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