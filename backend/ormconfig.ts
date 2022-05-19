const baseOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  synchronize: false,
  logging: false,
}

const platform_datasource = {
  ...baseOptions,
  name: "platform_datasource",
  database: process.env.DB_NAME_PLATFORM,
  entities: [__dirname + '/src/database/platform/entity/*.{js,ts}'],
  migrations: [__dirname + '/src/database/platform/migrations/*.{js,ts}'],
  subscribers: [__dirname + '/src/database/platform/subscribers/*.{js,ts}'],
}

const company_ddb_datasource = {
  ...baseOptions,
  name: "ddb_datasource",
  database: process.env.DB_NAME_PLATFORM,
  entities: [__dirname + '/src/database/company/daveys_delicious_bagels/entity/*.{js,ts}'],
  migrations: [__dirname + '/src/database/company/daveys_delicious_bagels/migrations/*.{js,ts}'],
  subscribers: [__dirname + '/src/database/company/daveys_delicious_bagels/subscribers/*.{js,ts}'],
}


export const config = {
  platform_datasource,
  company_ddb_datasource
}