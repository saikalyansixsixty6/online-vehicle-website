import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import { auth } from '../../utils/firebase';

const ProfilePage = () => {
  const context = useContext(MyContext);
  const { request } = context;
  const email = auth.currentUser.email;
  const requestedVehicles = request.filter((item) => item.email === email);

  return (
    
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="mb-4">
            <p className="text-lg">
              <span className="font-bold">Email:</span> {auth.currentUser.email}
            </p>
            <p className="text-lg">
              <span className="font-bold">Name:</span> {auth.currentUser.displayName || 'N/A'}
            </p>
          </div>
          <p className="text-lg font-bold mb-2">Test drives requested for:</p>
          <div>
            {requestedVehicles.map((item, index) => {
              const { title } = item;
              return <div key={index}>{title}</div>;
            })}
          </div>
        </div>
      
  );
};

export default ProfilePage;

























// import React, { useContext } from 'react'
// import MyContext from '../../context/MyContext'
// import { auth } from '../../utils/firebase'

// const ProfilePage = () => {
//   const context = useContext(MyContext);
//   const {request} = context;
//   const email = auth.currentUser.email;
//   const requestedVehicles = request.filter(item=>item.email === email)

//   return (
//     <div>
      
//       <div>
        
//        <p className='text-white'>Email:{auth.currentUser.email}</p>
//        <p className='text-white'>Name:{auth.currentUser.displayName}</p>
//        <p>Test drive requested for</p>
//        {
//         requestedVehicles.map((item,index)=>{
//           const {title}= item;
//           return(
//             <div key={index}>{title}</div>
//           )
//         })
//        }
        
//       </div>
      
//     </div>
//   )
// }

// export default ProfilePage
