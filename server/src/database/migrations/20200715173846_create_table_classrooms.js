exports.up = knex => knex.schema.createTable('classrooms', table => {

    table.increments('id');
    table.text('nickname').notNullable();

})

exports.down = knex => knex.schema.table('classrooms', table => {
    table.renameColumn('name','nickname');
});