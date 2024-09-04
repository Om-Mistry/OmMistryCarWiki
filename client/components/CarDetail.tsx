import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { carLayout } from '../../models/carLayout'
import { getCarById } from '../apis/getDBCars'
import '../styles/cars.css'

export default function CarDetail() {
  const { id } = useParams<{ id: string }>()

  const {
    data: car,
    error,
    isLoading,
  } = useQuery<carLayout, Error>({
    queryKey: ['car', id],
    queryFn: () => {
      if (id) {
        return getCarById(id)
      } else {
        throw new Error('ID is required')
      }
    },
  })

  if (isLoading) return <p>Awesome cars incoming!</p>
  if (error) return <p>Error is: {error.message}</p>

  if (!car) return <p>Nope, no cars!</p>

  return (
    <section className="carDetail">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="carImage"
      />
      <div className="carDetails">
        <h3>{car.make} {car.model}</h3>
        <p>Year: {car.year}</p>
        <p>{car.description}</p>
      </div>
    </section>
  )
}
