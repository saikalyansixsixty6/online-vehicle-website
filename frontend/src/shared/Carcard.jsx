import React from 'react';
import { Link } from 'react-router-dom';
// import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import './carcard.css'


const CarCard = ({ id, vehicle }) => {
  const { imageUrl, title, price } = vehicle;

  return (
    <div className="car-container w-64">
      <Link to={`/car_details/${id}`} state={{ vehicle }}>
        <div className="max-w-xs rounded-lg overflow-hidden shadow-md">
          <div className="aspect-w-18 aspect-h-9">
            <img
              src={imageUrl}
              alt="car"
              className="h-60 w-180 rounded-t-lg"
            />
          </div>
          <div className="px-4 py-2 car-info">
            <p className="font-bold text-lg mb-1 truncate">{title}</p>
            <p className="text-gray-700 text-sm">{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};




CarCard.propTypes = {
  vehicle: PropTypes.object.isRequired,
};

export default CarCard;

// const CarCard = ({ id, vehicle }) => {
//   const { imageUrl, title, price } = vehicle;

//   return (
//     <div className="car-container">
//       <Link to={`/car_details/${id}`} state={{ vehicle }}>
//         <div className="max-w-xs rounded overflow-hidden shadow-lg car-box">
//           <div className="car-img">
//             <img src={imageUrl} alt="car" className="w-full" />
//           </div>
//           <div className="px-6 py-4 car-info">
//             <p className="font-bold text-xl mb-2">{title}</p>
//             <p className="text-gray-700">{price}</p>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// const CarCard = ({ vehicle }) => {
//   const { id, title, imageUrl, price } = vehicle;

//   return (
//     <div className='car_container'>
//       <Link to={`/car_details/${id}`} state={{ vehicle }}>
//         <Card className='car_box'>
//           <div className='car_img'>
//             <img src={imageUrl} alt='car' />
//           </div>
//         </Card>
//         <CardBody className='car_info'>
//           <p className='brand text-lefd'>{title}</p>
//           <p>{price}</p>
//         </CardBody>
//       </Link>
//     </div>
//   );
// };