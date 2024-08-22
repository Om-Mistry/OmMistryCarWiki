import { useQuery } from '@tanstack/react-query'
import { carLayout } from '../../models/carLayout'
import { getCars } from '../../db'

export default function DBCars() {
  const {
    data: cars,
    error,
    isLoading,
  } = useQuery<carLayout[], Error>({
    queryKey: ['cars'],
    queryFn: getCars,
  })

  if (isLoading) return <p>Cars are loading!</p>
  if (error) return <p>The error is: {error.message}</p>

  console.log(cars)

  return (
    <>
      <h2>My Car List</h2>
      <ul>
        {cars?.map((car) => (
          <li key={car.id}>
            <h3>
              {car.make} {car.model}
            </h3>
            <img
              src={car.image_url}
              alt={`${car.make} ${car.model}`}
              style={{ width: '300px' }}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
