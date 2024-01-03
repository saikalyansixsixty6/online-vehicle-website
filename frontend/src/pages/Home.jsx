import React, { useContext } from 'react';



import CarCards from '../shared/Carcard';
import MyContext from '../context/MyContext';
import MainHeader from '../components/HeaderCom/MainHeader';

import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

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
          <div className=" ">
            <img
              src="https://t4.ftcdn.net/jpg/02/82/00/75/240_F_282007508_wdCUP7hUMNK1Cuzj7XmOcFmzyzJ0Nnp9.jpg"
              alt=""
              className="object-cover object-center h-full w-full"  
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
                      <Link
                        to={{
                          pathname: `/car_details/${vehicle.id}`,
                          state: { allVehicles: vehicle, selectedVehicle: vehicle },
                        }}
                       ></Link>
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