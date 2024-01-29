import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Authentication from '../Authentication';
import AddVehicle from '../../pages/Admin/AddVehicle';
import UpdateVehicle from '../../pages/Admin/UpdateVehicle';
import Cardetails from '../../pages/cardetails';
// import { auth } from '../../utils/firebase';
import AdminDashBoardTab from '../../pages/Admin/AdminDashBoardTab';
import ProfilePage from '../../pages/Profile/ProfilePage';
import { Navigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';



// const userEmail = auth.currentUser ? auth.currentUser.email : null;
// const adminEmail = "saikalyan123@gmail.com";
// const isAdmin = userEmail === adminEmail;

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<Authentication />} />
        <Route path="/" element={<Home />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/updatevehicle" element={<UpdateVehicle />} />
        <Route path="/car_details/:id" element={<Cardetails />} />
        <Route path="/admin" element={
         <ProtectedRouteForAdmin>
        <AdminDashBoardTab/>
         </ProtectedRouteForAdmin>
        } />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
};


export const ProtectedRouteForAdmin = ({children}) =>{
  
  
  if(auth.currentUser.email === "saikalyan1234@gmail.com"){
        return children
      }
  else{
    return <Navigate to={"/"}/>
  }
}

export default AppRouter
