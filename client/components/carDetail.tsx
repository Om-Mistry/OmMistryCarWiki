import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { carLayout } from '../../models/carLayout'
import { getCarById } from '../../server/db/db'
import '../styles/cars.css'

export default function CarDetail() {
  const { id } = useParams<{ id: string }>()
  const {
    data: car,
    error,
    isLoading,
  } = useQuery<carLayout, Error>({
    queryKey: ['car', id],
    queryFn: () => getCarById(Number(id)),
  })

  if (isLoading) return <p>Loading car details...</p>
  if (error) return <p>Error: {error.message}</p>

  if (!car) return <p>No car found!</p>

  return (
    <section className="carDetail">
      <img
        src={car.image_url}
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
