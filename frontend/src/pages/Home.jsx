import React, { useContext } from 'react';



import CarCards from '../shared/Carcard';
import MyContext from '../context/MyContext';
import MainHeader from '../components/HeaderCom/MainHeader';
// import FilterPage from '../components/filters/FilterPage';
import Footer from '../components/Footer/Footer';

function Home() {
  const context = useContext(MyContext);
  const { vehicle, searchkey } = context;
  console.log(vehicle);

  return (
    <>
      <main>
        <MainHeader />
        {/* <FilterPage/> */}
        <div className="hero-section">
          <div className="img-section ">
            <img
              src="https://img.pikbest.com/background/20220119/car-banner-background_6224454.jpg!sw800"
              alt=""
              className="img-hero-section max"  style={{width:'1550px'}}
            />
          </div>

          <div className="mx-auto max-w-7xl px-4">
            <div className="border rounded-lg border-gray-300 mt-5 p-4">
              <p className="font-serif text-3xl pb-5">
                The Most Searched Cars
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {vehicle
                  .filter((obj) =>
                    obj.title.toLowerCase().includes(searchkey)
                  )
                  .map((vehicle, index) => (
                    <div key={vehicle.id || index}>
                      <CarCards vehicle={vehicle} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;