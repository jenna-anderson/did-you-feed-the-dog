
exports.seed = function(knex) {
      return knex('users').insert([
        {email: 'test1@test.com', password: '1234'},
        {email: 'test2@test.com', password: '1234'},
        {email: 'test3@test.com', password: '1234'},
      ]);
};
