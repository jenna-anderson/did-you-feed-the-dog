const router = require('express').Router()

router.get('/', (req, res, next) => {
    console.log('get dogs wired')
    console.log(req.session.user.user_id)
})

module.exports = router
