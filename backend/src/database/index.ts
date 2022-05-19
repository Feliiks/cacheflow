import * as dotenv from "dotenv";
dotenv.config()
import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "../../ormconfig"


// Platform _________________________________________________________
const platform_datasource = new DataSource(
    // @ts-ignore
    config.platform_datasource
)

// Companies _________________________________________________________
const company_ddb_datasource = new DataSource(
    // @ts-ignore
    config.company_ddb_datasource
)

export const dbs = {
  platform_datasource,
  company_ddb_datasource
}