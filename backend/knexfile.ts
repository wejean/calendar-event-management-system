import { EnvironmentService } from './src/configs';
import { ConfigObject, Connection } from './src/database';

class KnexFile {
  public static getConnection(): Connection {
    const { db_host, db_password, db_user, db_name, db_port } =
      EnvironmentService.getAll();
    return {
      host: db_host,
      user: db_user,
      password: db_password,
      database: db_name,
      port: db_port,
    };
  }

  public static getConfig(): ConfigObject {
    return {
      client: 'pg',
      connection: KnexFile.getConnection(),
      pool: {
        min: 5,
        max: 50,
      },
      migrations: {
        directory: './src/database/migrations',
        tableName: 'knex_migration',
        extension: 'ts',
      },
      seeds: {
        directory: './src/database/seeds',
        extension: 'ts',
      },
    };
  }

  public static getConfigEnvironments(): ConfigObject {
    const config = KnexFile.getConfig();
    const { node_env: nodeEnv } = EnvironmentService.getAll();

    return {
      development: config,

      staging: config,

      production: config,

      test: { ...config, debug: true },
    }[nodeEnv];
  }
}

module.exports = KnexFile.getConfigEnvironments();
