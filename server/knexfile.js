require('dotenv/config');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.USER,
      password: process.env.PASSWORD
  },
  migrations: {
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
  }
};
