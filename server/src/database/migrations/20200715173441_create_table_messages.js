exports.up = knex => knex.schema.createTable('messages', table => {
    table.increments('id');
    table.text('title').notNullable();
    table.text('description').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());

  //relacionamento 
  table.integer('user_id')
  .references('users.id')
  .notNullable()
  .onDelete('CASCADE')
  })

exports.down = knex => knex.schema.dropTable('messages');