import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
// import { CitizenOrm } from '../citizen/citizen.orm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
  entities: ['src/**/*.orm.{ts,js}'],
  migrations: ['src/database/migrations/*.{ts,js}'],
  subscribers: [],
});
