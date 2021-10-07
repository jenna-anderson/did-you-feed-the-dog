const router = require('express').Router()
const Dogs = require('./dogs-model')

router.get('/', async (req, res, next) => {
    console.log('get dogs wired')
    console.log(req.session.user.user_id)
    try{
        const stuff = await Dogs.getDogs(req.session.user.user_id)
        res.json(stuff)
    } catch(err) {
        next(err)
    }
})

module.exports = router
