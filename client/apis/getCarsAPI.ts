import request from 'superagent'
import { carLayout } from '../../models/carLayout'

const urlRoot = '/api/v1'

export async function getCarsAPI(): Promise<carLayout[]> {
  try {
    const response = await request.get(`${urlRoot}/cars`)
    return response.body as carLayout[]
  } catch (error) {
    console.error('Error fetching cars:', error)
    throw error
  }
}
