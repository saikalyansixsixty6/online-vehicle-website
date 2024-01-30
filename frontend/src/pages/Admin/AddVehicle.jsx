import React, { useContext } from 'react'
import MyContext from '../../context/MyContext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const AddVehicle = () => {
  const context = useContext(MyContext);
  const {vehicles,setVehicles,addVehicle} = context;
  const { firebaseStorage } = context;


  const handleImageChange = async (e) => {
    const selectedFiles = e.target.files;

    const imageUrls = [];
    for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];

        // Upload file to Firebase Storage
        const storageRef = ref(firebaseStorage, `images/${file.name}`);
        await uploadBytes(storageRef, file);

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);
        imageUrls.push(downloadURL);
    }

    setVehicles((prevVehicles) => ({
        ...prevVehicles,
        imageUrls: imageUrls,
    }));
};

  return (
    <div>
            <div className=' flex justify-center items-center h-100'>
                <div className='  space-x-5 bg-gray-800 px-[150px] pt-11 m-8  rounded-xl '>
                    <div className=" ">
                        <h1 className='text-center text-white text-[26px] mb-4 font-bold'>Add Vehicle</h1>
                    </div>
                   <div className="flex flex-wrap gap-4 bg-gray-800">
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
                            <input
                            //  type="text"

                                // name='imageurl'
                                // value={vehicles.imageUrls} // Join the array into a comma-separated string
                                //  onChange={handleImageChange}
                                // onChange={(e)=>setVehicles({...vehicles, imageUrl : e.target.value})}

                                type='file'
                                name='imageUrl'
                                onChange={handleImageChange}
                                accept='image/*'
                                multiple


                                
                                // value={vehicles.imageUrls}
                                // onChange={(e)=>setVehicles({...vehicles, imageUrls : e.target.value})}                          
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
                            <input type="text"
                                name='Engine Capacity'
                                value={vehicles.EngineCapacity}
                                onChange={(e)=>setVehicles({...vehicles, EngineCapacity : e.target.value})}
                                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Engine Capacity'
                            />
                        </div>
                        <div>
                            <input type="text"
                                name='Insurance'
                                value={vehicles.Insurance}
                                onChange={(e)=>setVehicles({...vehicles, Insurance : e.target.value})}
                                className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Insurance_validity'
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
                                className=' bg-yellow-500 p-2 w-[170px] mt-[170px] text-black font-bold   rounded-lg'>
                                Add Vehicle
                            </button>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
  )
}

export default AddVehicle
