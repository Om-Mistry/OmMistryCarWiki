import { Router } from 'express'
import { getCars } from '../db/db'
import { addCarDB } from '../../client/apis/getDBCars'

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

export default router
