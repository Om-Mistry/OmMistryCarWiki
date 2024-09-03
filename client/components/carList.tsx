import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import '../styles/cars.css'
import { carLayout } from '../../models/carLayout'
import { getCars } from '../../server/db/db'

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
    return <div>Cool cars are incoming!</div>
  }

  if (error) {
    return <div>The error with the cars is: {error.message}</div>
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
