import { Router } from 'express'
import { getCars } from '../db/db'
import { addCarDB, updateCarDB, deleteCar } from '../../client/apis/getDBCars'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const cars = await getCars()
    res.json(cars)
  } catch (err) {
    res.status(500).json({ error: 'Can not get the cool cars' })
  }
})

router.post('/', async (req, res) => {
  const newCar = req.body
  try {
    const addedCar = await addCarDB(newCar)
    res.status(201).json(addedCar)
  } catch (err) {
    res.status(500).json({ error: 'Can not get the cool cars' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await deleteCar(Number(id))
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete car' })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const updatedCar = req.body
  try {
    const result = await updateCarDB(Number(id), updatedCar)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: 'Could not update car' })
  }
})

export default router
