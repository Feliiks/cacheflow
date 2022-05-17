"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.platform_db = void 0;
const client_1 = require("@prisma/client");
const platform_db = new client_1.PrismaClient();
exports.platform_db = platform_db;
