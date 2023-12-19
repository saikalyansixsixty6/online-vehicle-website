import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

const CarCard = ({ vehicle }) => {
  const { id, title, imageUrl, price } = vehicle;

  return (
    <div className='car_container'>
      <Link to={`/car_details/${id}`} state={{ vehicle }}>
        <Card className='car_box'>
          <div className='car_img'>
            <img src={imageUrl} alt='car' />
          </div>
        </Card>
        <CardBody className='car_info'>
          <p className='brand text-lefd'>{title}</p>
          <p>{price}</p>
        </CardBody>
      </Link>
    </div>
  );
};

CarCard.propTypes = {
  vehicle: PropTypes.object.isRequired,
};

export default CarCard;