import { useQuery } from '@tanstack/react-query'
import { getCarsAPI } from '../apis/getCarsAPI'
import { Link } from 'react-router-dom'
import { carLayout } from '../../models/carLayout'

function Home() {
  const {
    data: cars = [],
    error,
    isLoading,
  } = useQuery<carLayout[], Error>({
    queryKey: ['cars'],
    queryFn: getCarsAPI,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading cars: {error.message}</p>

  return (
    <div className="">
      <h1>Available Cars</h1>
      <div className="">
        {cars.map((car) => (
          <div key={car.id} className="">
            <Link to={`/car/${car.id}`} className="">
              <div className="">
                <img src={car.image_url} alt={`${car.make} ${car.model}`} />
              </div>
              <h2 className="">
                {car.make} {car.model}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
