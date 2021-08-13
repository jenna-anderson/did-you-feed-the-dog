
exports.up = async function(knex) {
    await knex.schema
    .createTable('users', (users) => {
        users.increments('user_id')
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
    .createTable('feedings', (feedings) => {
      feedings.increments('feeding_id')
      feedings.timestamps(false, true)
      feedings.date('feeding_date')
      feedings.time('feeding_time')
      feedings.integer('dog_id')
        .unsigned()
        .references('dog_id')
        .inTable('dogs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('users_dogs', (users_dogs) => {
      users_dogs.increments('user_dog_id')
      users_dogs.integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      users_dogs.integer('dog_id')
        .unsigned()
        .references('dog_id')
        .inTable('dogs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('users_dogs')
    await knex.schema.dropTableIfExists('feedings')
    await knex.schema.dropTableIfExists('weights')
    await knex.schema.dropTableIfExists('dogs')
    await knex.schema.dropTableIfExists('users')
  };
