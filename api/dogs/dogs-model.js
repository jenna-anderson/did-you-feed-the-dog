const db = require('../data/db-config')

const getDogs = async (user) => {
    const unsortedDogs = await db
        .select('d.dog_id', 'd.dog_name', 'd.dog_breed', 'w.dog_weight', 'w.date', 'f.feeding_date', 'f.feeding_time')
        .from('dogs as d')
        .join('users_dogs as ud', 'd.dog_id', 'ud.dog_id')
        .join('users as u', 'u.user_id', 'ud.user_id')
        .join('weights as w', 'w.dog_id', 'd.dog_id')
        .join('feedings as f', 'f.dog_id', 'd.dog_id')
        .where('ud.user_id', 2)
        .groupBy('d.dog_id', 'w.dog_weight', 'w.date', 'f.feeding_date', 'f.feeding_time')

    const filterByFeedingDate
}

module.exports = {
    getDogs
}