exports.up = knex => knex.schema.createTable('messages_classrooms', table => {

    table.integer('message_id')
    .notNullable()
    .references('id')
    .inTable('messages');

    table.integer('classroom_id')
    .notNullable()
    .references('id')
    .inTable('classrooms');

})

exports.down = knex => knex.schema.dropTable('messages_classrooms');