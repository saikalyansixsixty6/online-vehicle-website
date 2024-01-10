import React from 'react'
import MyContext from '../../context/MyContext'
import { useContext } from 'react'

const UpdateVehicle = () => {
  const context = useContext(MyContext)
  const {vehicles,setVehicles,updateVehicle} = context;



  return (
    <div>
            <div className='overflow-scroll flex justify-center items-center h-100'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Vehicle</h1>
                    </div>

                    <div>
                        <input type="text"
                            value={vehicles.title}
                            onChange={(e)=>setVehicles({...vehicles, title : e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle name'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='price'
                            value={vehicles.price}
                            onChange={(e)=>setVehicles({...vehicles, price : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle price'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='imageurl'
                            value={vehicles.imageUrl}
                            onChange={(e)=>setVehicles({...vehicles, imageUrl : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='category'
                            value={vehicles.fuelType}
                            onChange={(e)=>setVehicles({...vehicles, fuelType : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle category'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='gearType'
                            value={vehicles.gearType}
                            onChange={(e)=>setVehicles({...vehicles, gearType : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle gear Type'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='purchasedYear'
                            value={vehicles.purchasedYear}
                            onChange={(e)=>setVehicles({...vehicles, purchasedYear : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle purchased year'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='Kilometers'
                            value={vehicles.kilometers}
                            onChange={(e)=>setVehicles({...vehicles, kilometers : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Kilometers'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='title'
                            value={vehicles.description}
                            onChange={(e)=>setVehicles({...vehicles, description : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle Description'>

                       </textarea>
                    </div>

                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={updateVehicle}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Update Vehicle
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
  )
}

export default UpdateVehicle
