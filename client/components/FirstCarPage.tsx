import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { carLayout } from '../../models/carLayout'
import { getDBCars } from '../apis/getDBCars'
import AddCar from './AddCar'
import UpdateCar from './UpdateCar'
import DeleteCar from './DeleteCar'
import '../styles/cars.css'

export default function DBCars() {
  const {
    data: cars,
    error,
    isLoading,
  } = useQuery<carLayout[], Error>({
    queryKey: ['cars'],
    queryFn: getDBCars,
  })

  if (isLoading) return <p>Cars are loading!</p>
  if (error) return <p>The error is: {error.message}</p>

  console.log(cars)

  return (
    <section className="carList">
      <h2>My Car List</h2>
      <AddCar />
      <div className="carGrid">
        {cars?.map((car) => (
          <div className="carItem" key={car.id}>
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="carImage"
            />
            <div className="carItemDetails">
              <h3>
                <Link to={`/cars/${car.id}`}>
                  {car.make} {car.model}
                </Link>
              </h3>
              <UpdateCar car={car} />
              <DeleteCar carId={car.id!} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
