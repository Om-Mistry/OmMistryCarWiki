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
    image_url: '',
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
      <input
        type="text"
        value={newCar.make}
        onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
        placeholder="Car Make"
      />
      <input
        type="text"
        value={newCar.model}
        onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
        placeholder="Car Model"
      />
      <input
        type="text"
        value={newCar.year}
        onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
        placeholder="Car Year"
      />
      <input
        type="text"
        value={newCar.image_url}
        onChange={(e) => setNewCar({ ...newCar, image_url: e.target.value })}
        placeholder="Car Image URL"
      />
      <button type="submit">Add a brand new car!</button>
    </form>
  )
}
