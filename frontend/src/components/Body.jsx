import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Authentication from "./Authentication";

import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Home from "../pages/Home";
import AdminDashBoard from "../pages/Admin/AdminDashBoard";




const Body = () => {

  const dispatch = useDispatch()
  

  const appRouter = createBrowserRouter([
     {
        path:"/",
        element:<Authentication/>,
     },
     {
        path:"/home",
        element:<Home/>,
     },
     {
      path:"/admin",
      element:<AdminDashBoard/>,
   }


    ]);

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
         if (user) {
           // User is signed in, see docs for a list of available properties
           
           const {uid,email,displayName,photoURL} = user.uid;
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
