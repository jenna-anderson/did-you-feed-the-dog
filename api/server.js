const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.get('/api', (req, res) => {
    res.json({message: 'hello world'})
})
server.use((req, res, next) => {
    res.status(400).json({
        message: "sorry, not found"
    })
})


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server