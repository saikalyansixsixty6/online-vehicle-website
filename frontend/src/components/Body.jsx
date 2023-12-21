
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Home from "../pages/Home";
import Authentication from "./Authentication";
import AddVehicle from "../pages/Admin/AddVehicle";
import UpdateVehicle from "../pages/Admin/UpdateVehicle";
import AdminDashBoardTab from "../pages/Admin/AdminDashBoardTab";
import Cardetails from "../pages/cardetails";






const Body = () => {

  const dispatch = useDispatch()
  const adminEmail = "saikalyan123@gmail.com";
  const userEmail = auth.currentUser.email;
  const isAdmin = adminEmail === userEmail;

  
  


const appRouter = createBrowserRouter([
   {
      path:"/signIn",
      element:<Authentication/>,
   },
   {
      path:"/",
      element:<Home/>,
   },
   
    {
      path:"/admin",
      element: <AdminDashBoardTab />,
    },
             
    
   
   {
    path:"/addvehicle",
    element:<AddVehicle/>,
   },
   {
    path:"/updatevehicle",
    element:<UpdateVehicle/>,
   }
   ,{
    path:"/car_details/:id",
    element:<Cardetails/>,
   },
   ]);


  
  
    

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
         if (user) {
           // User is signed in, see docs for a list of available properties
           
           const {uid,email,displayName,photoURL} = user;
           dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
           



           // ...
         } else {
           // User is signed out
           dispatch(removeUser())
           
         }
       });
    },[])





  return (
    <div>

      
             <RouterProvider router={appRouter}/>
       

     
    </div>
  )
}

export default Body


