import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Authentication from '../Authentication';
import AdminDashBoard from '../../pages/Admin/AdminDashBoardTab';
import AddVehicle from '../../pages/Admin/AddVehicle';
import UpdateVehicle from '../../pages/Admin/UpdateVehicle';
import Cardetails from '../../pages/cardetails';
import { auth } from '../../utils/firebase';
import AdminDashBoardTab from '../../pages/Admin/AdminDashBoardTab';

const PrivateRoute = ({ element: Element, isAdmin, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAdmin ? <AdminDashBoardTab /> : <Navigate to="/" replace />}
    />
  );
};

const userEmail = auth.currentUser.email;
const adminEmail = "saikalyan123@gmail.com";
const isAdmin = userEmail === adminEmail;

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<Authentication />} />
        <Route path="/" element={<Home />} />
        <PrivateRoute
          path="/admin"
          element={AdminDashBoard}
          isAdmin={isAdmin}
        />
        <Route path="/addvehicle" element={<AddVehicle />} />
        <Route path="/updatevehicle" element={<UpdateVehicle />} />
        <Route path="/car_details/:id" element={<Cardetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
