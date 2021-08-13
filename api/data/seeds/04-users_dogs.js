
exports.seed = function(knex) {
      return knex('users_dogs').insert([
        {user_id: 1, dog_id: 1},
        {user_id: 2, dog_id: 2},
        {user_id: 2, dog_id: 3},
        {user_id: 3, dog_id: 1},
      ]);
};
