//import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<Knex.SchemaBuilder> }
 */
export function up(knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id')
    table.string('make')
    table.string('model')
    table.string('year')
    table.string('image')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('cars')
}
