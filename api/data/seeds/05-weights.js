
exports.seed = function(knex) {
      return knex('weights').insert([
        {dog_id: 1, dog_weight: 40, date: '02/10/20'},
        {dog_id: 1, dog_weight: 45, date: '10/15/20'},
        {dog_id: 1, dog_weight: 50, date: '01/06/21'},
        {dog_id: 1, dog_weight: 52, date: '03/22/21'},
        {dog_id: 1, dog_weight: 51, date: '06/16/21'},
        {dog_id: 1, dog_weight: 50, date: '08/07/21'},
        {dog_id: 2, dog_weight: 9, date: '06/12/19'},
        {dog_id: 2, dog_weight: 10, date: '10/15/19'},
        {dog_id: 2, dog_weight: 12, date: '02/02/20'},
        {dog_id: 2, dog_weight: 11, date: '12/25/20'},
        {dog_id: 2, dog_weight: 15, date: '05/12/21'},
        {dog_id: 3, dog_weight: 32, date: '01/05/21'},
        {dog_id: 3, dog_weight: 35, date: '04/16/21'},
        {dog_id: 3, dog_weight: 40, date: '06/22/21'},
        {dog_id: 3, dog_weight: 42, date: '07/15/21'},
        {dog_id: 3, dog_weight: 41, date: '08/11/21'},
      ]);
};
