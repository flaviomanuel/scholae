exports.up = knex => knex.schema.createTable('classrooms', table => {

    table.increments('id');
    table.text('name').notNullable();
    table.text('nickname').notNullable();


})

exports.down = knex => knex.schema.dropTable('classrooms');