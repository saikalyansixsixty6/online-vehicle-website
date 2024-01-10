import React, { useContext } from 'react'
import MyContext from '../../context/MyContext';



const AddVehicle = () => {
  const context = useContext(MyContext);
  const {vehicles,setVehicles,addVehicle} = context;



  const handleImageChange = (e) => {
    // Split the entered URLs by comma and store them in an array
    const imageUrls = e.target.value.split(",");
    setVehicles({ ...vehicles, imageUrls: imageUrls });
  };

  return (
    <div>
            <div className='overflow-scroll flex justify-center items-center h-100'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Vehicle</h1>
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
<<<<<<< HEAD
                            name='imageurls'
                            value={vehicles.imageUrls}
                            onChange={(e)=>setVehicles({...vehicles, imageUrls : e.target.value})}
=======
                            name='imageurl'
                            value={vehicles.imageUrls} // Join the array into a comma-separated string
                            // onChange={handleImageChange}
                            onChange={(e)=>setVehicles({...vehicles, imageUrl : e.target.value})}
>>>>>>> 9821559209ff67e7522a80a6948e10821771e77c
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                            name='fuelType'
                            value={vehicles.fuelType}
                            onChange={(e)=>setVehicles({...vehicles, fuelType : e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Vehicle Fuel Type'
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
                       <textarea cols="30" rows="10" name='description'
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
