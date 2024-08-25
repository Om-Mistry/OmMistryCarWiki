import { useQuery } from '@tanstack/react-query'
import { carLayout } from '../../models/carLayout'
import { getDBCars } from '../apis/getDBCars'
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

  return (
    <section className="carList">
      <h2>Car Details</h2>
      <div className="carGrid">
        {cars?.map((car) => (
          <div className="carItem" key={car.id}>
            <img
              src={car.image_url}
              alt={`${car.make} ${car.model}`}
              className="carImage"
            />
            <div className="carDetails">
              <h3>
                {car.make} {car.model}
              </h3>
              <p>Year: {car.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
