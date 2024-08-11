/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    { id: 1, make: 'Subaru', model: 'Impreza', year: '2004' },
    { id: 2, make: 'Maserati', model: 'Quattroporte', year: '2009' },
    { id: 3, make: 'Toyota', model: 'Hilux', year: '1990' },
  ])
}
