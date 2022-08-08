import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'ed_tech',
  entities: [],
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
});

dataSource
  .initialize()
  .then(() => console.log('TypeORM initialized!'))
  .catch((err) => console.log(`Error on initialize TypeORM: ${err}`));
