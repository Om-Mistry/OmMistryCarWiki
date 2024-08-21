import { useEffect, useState } from 'react'
import { carLayout } from '../../models/carLayout'
import { getCars } from '../../db'

export default function DBCars() {
  const [cars, setCars] = useState<carLayout[]>([])

  useEffect(() => {
    const fetchCarData = async () => {
      const carData: carLayout[] = await getCars()
      setCars(carData)
    }
    fetchCarData()
  }, [])

  console.log(cars)

  return (
    <>
      <h2>My Car List</h2>
      <ul>
        {cars.map((car) => (
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
