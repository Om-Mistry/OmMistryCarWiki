/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    { id: 1, cars: 'Subaru Impreza' },
    { id: 2, cars: 'Maserati Quattroporte' },
    { id: 3, cars: 'Toyota Hilux' },
  ])
}
