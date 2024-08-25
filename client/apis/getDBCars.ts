import request from 'superagent'
import { carLayout } from '../../models/carLayout.ts'

export async function getDBCars(): Promise<carLayout[]> {
  const response = await request.get('/api/v1/cars')
  return response.body
}

const data = getDBCars()
console.log(data)
