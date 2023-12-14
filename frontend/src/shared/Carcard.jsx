
import {Card, CardBody} from 'reactstrap';
import '../shared/carcard.css'


const CarCard = ({car}) => {
    const {_id, BrandName,photo,price }=car;

    

  return <>
    <div className="car_container">
        <Card className='car_box '>
            <div className='car_img '>
                <img src={photo} alt='car-img' />
                 
            </div>
        </Card>
        <CardBody className='car_info'>
            <p className='brand text-lefd'>{BrandName}</p>
            <p>{price}</p>
            <button> Request to Test Drive</button>

        </CardBody>
        </div>
    </>
}
export default CarCard;