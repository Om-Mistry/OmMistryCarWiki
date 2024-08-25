import express from 'express'
import carsRouter from './routes/cars.ts'

const server = express()
server.use(express.json())

server.use('/api/v1/cars', carsRouter)

export default server
