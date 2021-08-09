
exports.up = async function(knex) {
    await knex.schema
    .createTable('users', (users) => {
        users.increments()
        users.string('email', 200).notNullable().unique()
        users.string('password', 200).notNullable()
    })
    .createTable('dogs', (dogs) => {
        dogs.increments('dog_id')
        dogs.string('dog_name', 200).notNullable()
        dogs.string('dog_breed', 200)
        dogs.date('dog_birthday', 200)
    })
    .createTable('weights', (weights) => {
      weights.increments('weight_id')
      weights.integer('dog_id')
        .unsigned()
        .references('dog_id')
        .inTable('dogs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      weights.float('dog_weight')
      weights.date('date')
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('weights')
    await knex.schema.dropTableIfExists('dogs')
    await knex.schema.dropTableIfExists('users')
  };
