const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { JWT_SECRET } = require('./config/secrets')
const session = require('express-session')
const store = require('connect-session-knex')(session)

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

const authRouter = require('./auth/auth-router')

server.use(session({
    name: 'watermelon',
    secret: JWT_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: false,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
    store: new store({
        knex: require('./data/db-config'),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
    })
}))

server.use('/api/auth', authRouter)

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