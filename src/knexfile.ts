// Update with your config settings.
interface KnexConfig {
  [key: string]: object;
}

const environments: KnexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'mysql',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'challenger',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
  },
  production: {
    client: 'mysql2',
    connection: {
      host: 'mysql',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'challenger_prod',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
  },
};

export default environments;
