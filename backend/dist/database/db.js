"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbs = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
require("reflect-metadata");
const typeorm_1 = require("typeorm");
// Platform _________________________________________________________
const platform_datasource = new typeorm_1.DataSource({
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
});
// Companies _________________________________________________________
const company_ddb_datasource = new typeorm_1.DataSource({
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
});
exports.dbs = {
    platform_datasource,
    company_ddb_datasource
};
