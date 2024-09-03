import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCar } from '../apis/getDBCars'

export default function DeleteCar({ carId }: { carId: number }) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: () => deleteCar(carId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
    onError: (error) => {
      console.error('Error deleting car:', error)
    },
  })

  const handleDelete = () => {
    mutation.mutate()
  }

  return <button onClick={handleDelete}>Delete Car</button>
}
