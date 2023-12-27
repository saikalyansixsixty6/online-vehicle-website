/* eslint-disable react-hooks/exhaustive-deps */


import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import AppRouter from "./Routes/AppRouter";






const Body = () => {

  const dispatch = useDispatch()
  
  
  
    

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

      
             <AppRouter/>
       

     
    </div>
  )
}

export default Body


