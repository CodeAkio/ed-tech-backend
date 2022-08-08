import { Student } from '@modules/enrollments/infra/typeorm/entities/Student';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'ed_tech',
  entities: [Student],
  migrations: ['src/shared/infra/typeorm/migrations/*.ts'],
});

export function createConnection(host = 'postgres'): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
