

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'db_scholae',
      user: 'postgres',
      password: 'root'
  },
  migrations: {
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
  }
};
