const db = require('../data/db-config')

async function add(user) {
    const [newUserObject] = await db('users').insert(user, ['user_id', 'email'])
    return newUserObject
}

module.exports = {
    add,
}