import React from 'react'
import MyContext from './MyContext'
import { useState,useEffect } from 'react'
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc,getDocs } from 'firebase/firestore';
import { fireDB } from '../utils/firebase';
import {toast} from "react-toastify"



const MyState = (props) => {
  
  
  const [loading,setLoading] = useState(false)
  const [vehicles, setVehicles] = useState({
    title: '',
    price: '',
    imageUrl: [],
    category: '',
    description: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  // ****** get vehicle data ******//
  const getVehicleData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "vehicles"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setVehicle(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  const addVehicle = async () => {
    if (vehicles.title == null || vehicles.price == null || vehicles.imageUrl == null || vehicles.category == null || vehicles.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "vehicles")
    setLoading(true)
    try {
      await addDoc(productRef, vehicles)
      toast.success("Vehicle Added successfully")
      setTimeout(() => {
        window.location.href = "/admin"
      }, 800);
      getVehicleData()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setVehicles("")
  }

  const [vehicle, setVehicle] = useState([]);

  
  

  

  const edithandle = (item) =>{
    setVehicles(item)
  }

  //updateProduct

  const updateVehicle = async() =>{
    setLoading(true)
     try{
         await setDoc(doc(fireDB,"vehicles",vehicles.id),vehicles)
         toast.success("Vehicle updated successfully")
         setTimeout(() => {
          window.location.href = "/admin"
        }, 800);
         getVehicleData()
         setLoading(false)

     }
     catch(error){
      console.log(error)
      setLoading(false)
     }
  }

  //delete product

  const deleteVehicle = async(item) =>{
     setLoading(true)
    try {
      await deleteDoc(doc(fireDB,"vehicles",item.id))
      toast.success("Product deleted Successfully")
      setLoading(false)
      getVehicleData()
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const [request, setRequest] = useState([]);

  const getRequestData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "request"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setRequest(ordersArray);
      console.log("requests",ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log("users",usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice,setFilterPrice] = useState('')
  const [userCard,setUserCard] = useState(false);
  
  useEffect(() => {
    getVehicleData();
    getRequestData();
    getUserData();
  }, []);







    
  return (
    <MyContext.Provider value={{vehicles,setVehicles,edithandle,vehicle,user,setUser,setVehicle,updateVehicle,deleteVehicle,addVehicle,loading,request,setRequest,searchkey,setSearchkey,
    filterType,setFilterType,filterPrice,setFilterPrice,userCard,setUserCard}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
