import React, { useContext } from 'react';
import heroimg1 from '../Assets/images/heroimg1.png';
import '../pages/Home.css';

import CarCards from '../shared/Carcard';
import MyContext from '../context/MyContext';
import MainHeader from '../components/HeaderCom/MainHeader';
import FilterPage from '../components/filters/FilterPage';
// import Footer from '../components/Footer/Footer';

function Home() {
  const context = useContext(MyContext);
  const { vehicle } = context;
 console.log(vehicle)

  return (
    <>
      <main>
        <MainHeader />
        <FilterPage/>
        <div className="hero-section">
          <div className="img-section">
            <img src={heroimg1} alt="" className="img-hero-section" />
          </div>

          <div className="inner_container">
            <p className="inner_heading font-serif text-3xl pb-5 ">
              The most searched cars
            </p>
            <div className="card_box flex flex-wrap gap-6 ">
            {vehicle?.map((vehicle, index) => (
              <div key={vehicle.id || index} className="w-50%">
                <CarCards vehicle={vehicle} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default Home;