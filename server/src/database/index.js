const { development } = require('../../knexfile');
const knexfile = require('../../knexfile');

const env = process.env.DB_ENV || 'development';
const knex = require('knex')(knexfile[env]);

module.exports = knex;