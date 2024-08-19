import request from 'superagent'

export async function getDBCars() {
  const response = await request.get('GET/API/V1/cars')
  return response.body
}

const data = getDBCars()
console.log(data)
