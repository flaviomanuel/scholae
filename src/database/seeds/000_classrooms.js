
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classrooms').del()
    .then(function () {
      // Inserts seed entries
      return knex('classrooms').insert([
        {name: '1 ano A', nickname: '1 A'},
        {name: '1 ano B', nickname: '1 B'},
        {name: '2 ano A', nickname: '2 A'},
        {name: '2 ano B', nickname: '2 B'},
        {name: '3 ano A', nickname: '3 A'},
        {name: '3 ano B', nickname: '3 B'},

      ]);
    });
};
