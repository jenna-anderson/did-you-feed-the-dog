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
    try{
        const dbUser = await Users.add(newUser)
        res.status(201).json(dbUser)
    } catch(err) {
        next(err)
    }
})

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body
    const [user] = await Users.findBy(email)
    if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user
        res.json({
            status: 200,
            message: `Welcome ${email}`
        })
    } else {
        next({
            status: 401,
            message: 'Invalid credentials'
        })
    }
})

router.get('/logout', (req, res) => {
    if (req.session && req.session.user) {
        req.session.destroy(err => {
          if (err) {
            res.json({ message: 'error logging out' });
          } else {
            res.json({ message: 'logged out' });
          }
        });
      } else {
        res.json({ message: 'no session' });
      }
    });

module.exports = router
