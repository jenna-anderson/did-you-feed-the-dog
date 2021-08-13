
exports.seed = function(knex) {
      return knex('feedings').insert([
        {feeding_date: '08/11/21', feeding_time: '8:00:00', dog_id: 1},
        {feeding_date: '08/11/21', feeding_time: '18:00:00', dog_id: 1},
        {feeding_date: '08/12/21', feeding_time: '7:30:00', dog_id: 1},
        {feeding_date: '08/12/21', feeding_time: '6:45:00', dog_id: 1},
        {feeding_date: '08/11/21', feeding_time: '8:00:00', dog_id: 2},
        {feeding_date: '08/11/21', feeding_time: '18:00:00', dog_id: 2},
        {feeding_date: '08/12/21', feeding_time: '8:30:00', dog_id: 2},
        {feeding_date: '08/11/21', feeding_time: '8:00:00', dog_id: 3},
        {feeding_date: '08/11/21', feeding_time: '16:00:00', dog_id: 3},
        {feeding_date: '08/12/21', feeding_time: '8:00:00', dog_id: 3},
        {feeding_date: '08/12/21', feeding_time: '17:00:00', dog_id: 3}
      ]);
};
