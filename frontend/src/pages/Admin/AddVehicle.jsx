import React, { useContext } from 'react'
import MyContext from '../../context/MyContext';


const AddVehicle = () => {
  const context = useContext(MyContext);
  const {vehicles,setVehicles,addVehicle} = context;

  return (
    <div>
            <div className=' flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
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
                            value={vehicles.category}
                            onChange={(e)=>setVehicles({...vehicles, category : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle category'
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
                            onClick={addVehicle}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Vehicle
                        </button>
                    </div>
                 
                </div>
            </div>
        </div>
  )
}

export default AddVehicle
