//import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<Knex.SchemaBuilder> }
 */
export const up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id')
    table.string('cars')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('cars')
}
