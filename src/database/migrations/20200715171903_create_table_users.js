
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id');
    table.text('name').notNullable();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();

   
})


exports.down = knex => knex.schema.dropTable('users');
