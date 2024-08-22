import express from 'express'
import { getCars } from '../db'

const server = express()
server.use(express.json())

server.get('/api/v1/cars', async (req, res) => {
  try {
    const cars = await getCars()
    res.json(cars)
  } catch (err) {
    res.status(500).json({ error: 'Cannot get cars' })
  }
})

export default server
