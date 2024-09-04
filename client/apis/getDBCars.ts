import request from 'superagent'
import { carLayout } from '../../models/carLayout.ts'

export async function getDBCars(): Promise<carLayout[]> {
  const response = await request.get('/api/v1/cars')
  return response.body
}

export async function getCarById(id: string): Promise<carLayout> {
  const response = await request.get(`/api/v1/cars/${id}`)
  return response.body
}

export async function addCarDB(newCar: Omit<carLayout, 'id'>): Promise<carLayout> {
  const response = await request.post('/api/v1/cars').send(newCar)
  return response.body
}


export async function deleteCar(id: number): Promise<void> {
  await request.delete(`/api/v1/cars/${id}`)
}

export async function updateCarDB(
  id: number,
  updatedCar: carLayout,
): Promise<carLayout> {
  const response = await request.put(`/api/v1/cars/${id}`).send(updatedCar)
  return response.body
}
