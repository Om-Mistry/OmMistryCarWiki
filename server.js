import express from 'express'
import sticks from './routes/stick.js'

const server = express()

// Server configuration
server.use(express.json())
server.use('/api/v1/sticks', sticks)

// Your routes/router(s) should go here

export default server

server.listen(5173, () => {
  console.log('listening at localhost:5173')
})
