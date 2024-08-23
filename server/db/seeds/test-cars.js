/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    {
      id: 1,
      make: 'Subaru',
      model: 'Impreza',
      year: '2004',
      image:
        'https://s1.cdn.autoevolution.com/images/news/big-mile-2004-subaru-impreza-wrx-sti-shines-affordable-in-world-rally-blue-177115-7.jpg',
    },
    {
      id: 2,
      make: 'Maserati',
      model: 'Quattroporte',
      year: '2009',
      image: 'https://wallpapercave.com/wp/wp1981479.jpg',
    },
    {
      id: 3,
      make: 'Toyota',
      model: 'Hilux',
      year: '1990',
      image:
        'https://jdmsupply.com/storage/images/vehicle/246/MFT1A827BvLEcYOCd4lvEhwRG92nOQ6xsyJvOk5d_1440x1080.webp',
    },
  ])
}
