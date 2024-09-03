import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getCars } from '../../server/db/db'
import { carLayout } from '../../models/carLayout'
import '../styles/cars.css'

const CarList = () => {
  const {
    data: cars,
    error,
    isLoading,
  } = useQuery<carLayout[], Error>({
    queryKey: ['cars'],
    queryFn: getCars,
  })

  if (isLoading) {
    return <div>Cars are loading now!</div>
  }

  if (error) {
    return <div>You have an error:{error.message}</div>
  }

  return (
    <section className="carList">
      <div className="carGrid">
        {cars?.map((car) => (
          <div className="carItem" key={car.id}>
            <Link to={`/cars/${car.id}`}>
              <img
                src={car.image_url}
                alt={`${car.make} ${car.model}`}
                className="carImage"
              />
            </Link>
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

export default CarList
