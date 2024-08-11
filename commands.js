import { getCars, close, deleteCarsDB, addCarsDB, editCarsDB } from './db.js'

export async function list() {
  try {
    const cars = await getCars()
    printCars(cars)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printCars(cars) {
  cars.forEach((cars) => {
    console.info(`${cars.id}: ${cars.cars}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteCarsCommand(id) {
  try {
    await deleteCarsDB(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function addCarsCommand(string) {
  try {
    await addCarsDB(string)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function editCarsCommand(id, string) {
  try {
    await editCarsDB(id, string)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
