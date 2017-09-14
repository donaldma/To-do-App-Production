'use strict'

module.exports = (knex) => {
  return {
    getAllTasks: () => {
      return knex.select('tasks.id', 'tasks.name', 'tasks.completed', 'tasks.created_at', 'users.name as user')
        .from('tasks')
        .innerJoin('users', 'tasks.users_id', 'users.id')
        .orderBy('tasks.created_at', 'desc')
    },
    
    getUsers: () => {
      return knex('users')
        .select()
    },

    createUser: (data) => {
      return knex('users')
        .insert({
          name: data.name
        })
    },

    searchUser: (name) => {
      return knex.raw(
        `select * from users where lower(name) = lower('${name}')`
      )
    },

    deleteUser: (id) => {
      return knex('users')
        .where({ id })
        .del();
    },

    getUsersTasks: (id) => {
      return knex('tasks')
        .where({ users_id : id })
    },

    createTask: (data, id) => {
      return knex('tasks')
        .insert({
          name: data.task,
          users_id: id,
          completed: false
        })
    },

    deleteTask: (id) => {
      return knex('tasks')
        .where({ id })
        .del()
    },

    toggleTrue: (task_id) => {
      return knex('tasks')
      .update({
        completed: true
      })
      .where({ id : task_id })
    },

    toggleFalse: (task_id) => {
      return knex('tasks')
      .update({
        completed: false
      })
      .where({ id : task_id })
    }
    
  }
};