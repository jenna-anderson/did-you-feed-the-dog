const router = require('express').Router()
const Users = require('../users/users-model')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res, next) => {
    const { email, password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    const newUser = {
        email: email,
        password: hash
    }
    const dbUser = await Users.add(newUser)
    res.status(201).json(dbUser)
})

router.post('/login', (req, res, next) => {
    console.log('login wired')
})

router.get('/logout', (req, res, next) => {
    console.log('logout wired')
})

module.exports = router