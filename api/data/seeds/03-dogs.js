
exports.seed = function(knex) {
      return knex('dogs').insert([
        {dog_name: 'Izzy', dog_breed: 'lab', dog_birthday: '10/09/12'},
        {dog_name: 'Sandy', dog_breed: 'bichon', dog_birthday: '08/10/10'},
        {dog_name: 'Brenna', dog_breed: 'spaniel', dog_birthday: '02/22/15'}
      ]);
};
