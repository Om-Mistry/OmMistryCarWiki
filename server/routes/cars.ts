import { Router } from 'express'
import { getCars } from '../../db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const cars = await getCars()
    res.json(cars)
  } catch (err) {
    res.status(500).json({ error: 'Can not get cars' })
  }
})

export default router
