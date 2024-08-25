import connection from './connection.ts'

const db = connection

export function getCars() {
  return db('cars').select()
}

// Your DB functions go here

export function close() {
  db.destroy()
}

export function deleteCarsDB(id) {
  const result = db('cars').where({ id }).del()
  return result
}

export function addCarsDB(car) {
  const result = db('cars').insert(car)
  return result
}

export function editCarsDB(id, updatedCar) {
  const result = db('cars').where('id', id).update(updatedCar)
  return result
}
