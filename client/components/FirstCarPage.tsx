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
      <h1>My Car List</h1>
      <AddCar />
      <div className="carGrid">
        {cars?.map((car) => (
          <div className="carItem" key={car.id}>
            <img src={car.image} alt={``} className="carImage" />
            <div className="carItemDetails">
              <h2>
                <Link to={`/cars/${car.id}`}>
                  {car.make} {car.model}
                </Link>
              </h2>
              <UpdateCar car={car} />
              <DeleteCar carId={car.id!} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
