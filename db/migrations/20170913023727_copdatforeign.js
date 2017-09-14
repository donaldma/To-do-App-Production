exports.up = function (knex, Promise) {
  return Promise.all([

    knex.schema.table('tasks', (table) => {
      table.dropForeign('user_id');
    }),

    knex.schema.table('tasks', function (table) {
      table.integer('users_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([

    knex.schema.table('tasks', (table) => {
      table.dropForeign('users_id');
    }),

    knex.schema.table('tasks', function (table) {
      table.integer('user_id')
        .references('id')
        .inTable('users');
    })
  ])
};