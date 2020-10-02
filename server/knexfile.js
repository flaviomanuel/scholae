

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'db_scholae',
      user: 'postgres',
      password: 'rootpostgres'
  },
  migrations: {
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
  }
};
