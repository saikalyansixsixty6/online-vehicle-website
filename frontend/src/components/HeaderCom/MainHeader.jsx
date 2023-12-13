import "./MainHeader.css"
import Ellips from '../../Assets/images/img.png'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCaretDown,faUser,faComment,faAngleDown} from '@fortawesome/free-solid-svg-icons'
function MainHeader() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
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
  return <>
  <div className={`${isSticky ? 'sticky' : ''}`}>
    <div className='container  mr-2 w-auto flex flex-wrap justify-between' >
      <div className="header flex flex-wrap">
        <div className="logo ">
          <img src={Ellips} alt="logo" className='ml-5' />
        </div>
        <div className="search-location ml-5 mt-4">
          <input type="text" placeholder='India' />
          <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon-svg'/>
          <FontAwesomeIcon icon={faCaretDown} className='search-icon-svg2 '/>
          </div>
        </div>
      </div>
      <div className="header2 flex flex-wrap mt-3 ">

        <div className="search-vahcle flex flex-wrap gap-5 mr-2 cursor-pointer">
          <input type="text" placeholder='India' id='' className='search-cars'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon-svg3'/>
          <p className='language mt-4'> ENGLISH </p>
          <FontAwesomeIcon icon={faCaretDown} className='search-icon-svg mt-4 w-6 h-6 ml-0'/>
          <FontAwesomeIcon icon={faUser} className='user-icon mt-2 w-8 h-8'/>
          <FontAwesomeIcon icon={faComment} className='user-chat mt-2 w-8 h-8'/>
        </div>
        <div className="user-icons"></div>
      </div>
    </div>
    <div className="header-category mt-10 pl-10 flex flex-wrap gap-16 pb-5">
          <div className="categories  relative category">
            <p onClick={toggleDropdown} className="cursor-pointer">
              All Categories
              <FontAwesomeIcon icon={faAngleDown} className='dropdown-icon ml-2 mt-1' />
            </p>
            {isDropdownOpen && (
              <div className="dropdown absolute mt-2 bg-white shadow-lg rounded-md">
                <ul className="py-1">
                  <li>
                    <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                      Category 1
                    </a>
                  </li>
                  <li>
                    <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                      Category 2
                    </a>
                  </li>
                  <li>
                    <a href="/`" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
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

export default MainHeader