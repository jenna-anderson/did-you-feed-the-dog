const router = require('express').Router()
const bcrypt = require('bcryptjs')

router.post('/register', (req, res, next) => {
    console.log('register wired')
})

router.post('/login', (req, res, next) => {
    console.log('login wired')
})

router.get('/logout', (req, res, next) => {
    console.log('logout wired')
})

module.exports = router