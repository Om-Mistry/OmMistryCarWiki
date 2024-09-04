import { Router } from 'express'
import { getCars } from '../db/db'
import { getCarById } from '../db/db'
import { deleteCarsDB } from '../db/db'
import { addCarsDB } from '../db/db'
import { editCarsDB } from '../db/db'

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
    const addedCar = await addCarsDB(newCar)
    res.status(201).json(addedCar)
  } catch (err) {
    res.status(500).json({ error: 'Can not get the cool cars' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await deleteCarsDB(Number(id))
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete car' })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const updatedCar = req.body
  try {
    const result = await editCarsDB(Number(id), updatedCar)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ error: 'Could not update car' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const car = await getCarById(Number(id))
    if (car) {
      res.json(car)
    } else {
      res.status(404).json({ error: 'Car does not exist yet' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Can not get car details' })
  }
})

export default router
