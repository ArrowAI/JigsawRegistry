import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const configSeed: ConnectionOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: false,
  logging: false,
  entities: ['src/orm/entities/**/*.ts'],
  migrations: ['src/orm/seeds/**/*.ts'],
  cli: {
    migrationsDir: 'src/orm/seeds',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export = configSeed;
