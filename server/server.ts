import express from 'express'
import carsRouter from './routes/cars.ts'

const server = express()
server.use(express.json())

server.use('/api/v1/cars', carsRouter)

export default server

import * as Path from 'node:path'

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
