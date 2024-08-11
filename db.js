import knexfile from './knexfile.js'
import knex from 'knex'

const connection = knex(knexfile.development) // connection

const db = connection

export function getCars() {
  return db('cars').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export function deleteCarsDB(id, db = connection) {
  const result = db('cars').where({ id }).del()
  return result
}

export function addCarsDB(string) {
  const result = db('cars').insert({ task: string })
  return result
}

export function editCarsDB(id, string) {
  console.log(string)
  const result = db('cars').where('id', id).update({ task: string })
  return result
}
