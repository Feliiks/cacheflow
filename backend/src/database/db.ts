import * as dotenv from "dotenv";
dotenv.config()
import "reflect-metadata";
import { DataSource } from "typeorm";


// Platform _________________________________________________________
const platform_datasource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME_PLATFORM,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/platform/entity/*.{js,ts}'],
  migrations: [__dirname + '/platform/migrations/*.{js,ts}'],
  subscribers: [__dirname + '/platform/subscribers/*.{js,ts}'],
})

// Companies _________________________________________________________
const company_ddb_datasource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME_DDB,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/company/daveys_delicious_bagels/entity/*.{js,ts}'],
  migrations: [__dirname + '/company/daveys_delicious_bagels/migrations/*.{js,ts}'],
  subscribers: [__dirname + '/company/daveys_delicious_bagels/subscribers/*.{js,ts}']
})

export const dbs = {
  platform_datasource,
  company_ddb_datasource
}