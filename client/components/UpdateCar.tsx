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
    image: car.image,
    description: '',
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
      <div>
        <label htmlFor={`make-${car.id}`}>Make</label>
        <input
          type="text"
          id={`make-${car.id}`}
          value={updatedCar.make}
          onChange={(e) =>
            setUpdatedCar({ ...updatedCar, make: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor={`model-${car.id}`}>Model</label>
        <input
          type="text"
          id={`model-${car.id}`}
          value={updatedCar.model}
          onChange={(e) =>
            setUpdatedCar({ ...updatedCar, model: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor={`year-${car.id}`}>Year</label>
        <input
          type="text"
          id={`year-${car.id}`}
          value={updatedCar.year}
          onChange={(e) =>
            setUpdatedCar({ ...updatedCar, year: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor={`image-url-${car.id}`}>Image URL</label>
        <input
          type="text"
          id={`image-url-${car.id}`}
          value={updatedCar.image}
          onChange={(e) =>
            setUpdatedCar({ ...updatedCar, image: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor={`description-${car.id}`}>Description</label>
        <textarea
          id={`description-${car.id}`}
          value={updatedCar.description}
          onChange={(e) =>
            setUpdatedCar({ ...updatedCar, description: e.target.value })
          }
        />
      </div>
      <button type="submit">Update Car</button>
    </form>
  )
}
