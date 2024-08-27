import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCarDB } from '../apis/getDBCars'
import { carLayout } from '../../models/carLayout'

export default function UpdateCar({ car }: { car: carLayout }) {
  const queryClient = useQueryClient()

  const [updatedCar, setUpdatedCar] = useState<Omit<carLayout, 'id'>>({
    make: car.make,
    model: car.model,
    year: car.year,
    image_url: car.image_url,
  })

  const mutation = useMutation({
    mutationFn: (updatedCar: Omit<carLayout, 'id'>) => {
      if (car.id === undefined) {
        throw new Error('Car ID is undefined')
      }
      return updateCarDB(car.id, updatedCar)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(updatedCar)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedCar.make}
        onChange={(e) => setUpdatedCar({ ...updatedCar, make: e.target.value })}
        placeholder="Car Make"
      />
      <input
        type="text"
        value={updatedCar.model}
        onChange={(e) =>
          setUpdatedCar({ ...updatedCar, model: e.target.value })
        }
        placeholder="Car Model"
      />
      <input
        type="text"
        value={updatedCar.year}
        onChange={(e) => setUpdatedCar({ ...updatedCar, year: e.target.value })}
        placeholder="Car Year"
      />
      <input
        type="text"
        value={updatedCar.image_url}
        onChange={(e) =>
          setUpdatedCar({ ...updatedCar, image_url: e.target.value })
        }
        placeholder="Car Image URL"
      />
      <button type="submit">Update one of the awesome cars</button>
    </form>
  )
}
