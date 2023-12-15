import React from 'react'
import heroimg1 from '../Assets/images/heroimg1.png'
import '../pages/Home.css'
import carsData from '../Assets/data/cars'
import CarCards from '../shared/Carcard';
import Layoute from '../components/layouts/layouts';

function Home() {

  return <>
  <main>
  <Layoute/>
  <div className="hero-section">
        <div className="img-section">
            <img src={heroimg1} alt="" className='img-hero-section' />
        </div>
        
          <div className="inner_container">
            <p className='inner_heading font-serif text-3xl pb-5 '> The most searched cars</p>
            <div className="card_box flex flex-wrap gap-6 ">
                {carsData?.map((car) => (
                   <div key={car.id} className="w-50%"> 
                      <CarCards car={car} />
                      
                    </div>
                  ))}
              </div>
            </div>
         
      </div>

  </main>
  
  </>
}

export default Home;