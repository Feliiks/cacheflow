import "reflect-metadata";
import { DataSource } from "typeorm";


// Platform _________________________________________________________
export const platform_datasource = new DataSource({
  type: "mysql",
  host: "cacheflow-db-cluster-dev.cluster-c37w0dj5gpef.us-east-1.rds.amazonaws.com",
  port: 3306,
  username: "clusteradmin",
  password: "O0zf8.1a3AU.wWOWpE_wfp5TowtJ=Y",
  database: "platform",
  synchronize: true,
  logging: false,
  entities: [__dirname + '/platform/entity/*.{js,ts}'],
  migrations: [__dirname + '/platform/migrations/*.{js,ts}'],
  subscribers: [__dirname + '/platform/subscribers/*.{js,ts}'],
})

// Companies _________________________________________________________
export const company_ddb_datasource = new DataSource({
  type: "mysql",
  host: "cacheflow-db-cluster-dev.cluster-c37w0dj5gpef.us-east-1.rds.amazonaws.com",
  port: 3306,
  username: "clusteradmin",
  password: "O0zf8.1a3AU.wWOWpE_wfp5TowtJ=Y",
  database: "daveys_delicious_bagels",
  synchronize: true,
  logging: false,
  entities: [__dirname + '/company/daveys_delicious_bagels/entity/*.{js,ts}'],
  migrations: [__dirname + '/company/daveys_delicious_bagels/migrations/*.{js,ts}'],
  subscribers: [__dirname + '/company/daveys_delicious_bagels/subscribers/*.{js,ts}']
})