import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCarDB } from '../apis/getDBCars'
import { carLayout } from '../../models/carLayout'

export default function AddCar() {
  const queryClient = useQueryClient()

  const [newCar, setNewCar] = useState<Omit<carLayout, 'id'>>({
    make: '',
    model: '',
    year: '',
    image: '',
    description: '',
  })

  const mutation = useMutation({
    mutationFn: (newCar: Omit<carLayout, 'id'>) => addCarDB(newCar),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(newCar)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="car-make">Car Make</label>
        <input
          type="text"
          id="car-make"
          value={newCar.make}
          onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
          placeholder="Car Make"
        />
      </div>
      <div>
        <label htmlFor="car-model">Car Model</label>
        <input
          type="text"
          id="car-model"
          value={newCar.model}
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
          placeholder="Car Model"
        />
      </div>
      <div>
        <label htmlFor="car-year">Car Year</label>
        <input
          type="text"
          id="car-year"
          value={newCar.year}
          onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
          placeholder="Car Year"
        />
      </div>
      <div>
        <label htmlFor="car-image-url">Car Image URL</label>
        <input
          type="text"
          id="car-image-url"
          value={newCar.image}
          onChange={(e) => setNewCar({ ...newCar, image: e.target.value })}
          placeholder="Car Image URL"
        />
      </div>
      <div>
        <label htmlFor="car-description">Car Description</label>
        <textarea
          id="car-description"
          value={newCar.description}
          onChange={(e) =>
            setNewCar({ ...newCar, description: e.target.value })
          }
          placeholder="Car Description"
        />
      </div>
      <button type="submit">Add a brand new car!</button>
    </form>
  )
}
