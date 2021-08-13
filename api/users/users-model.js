const db = require('../data/db-config')

async function add(user) {
    const [newUserObject] = await db('users').insert(user, ['user_id', 'email'])
    return newUserObject
}

async function findBy(filter) {
    const filteredUsers = await db
        .select('user_id', 'email', 'password')
        .from('users')
        .where('email', filter)
    return filteredUsers
}

module.exports = {
    add,
    findBy
}