"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const db_1 = require("../database/db");
const port = 3000;
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            for (const i of Object.keys(db_1.dbs)) {
                // @ts-ignore
                yield db_1.dbs[i].initialize();
            }
            console.log("Database connection successfull.");
        }
        catch (err) {
            console.log(err);
        }
    });
}());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ limit: "500mb", extended: true, parameterLimit: 50000 }));
app.use(express_1.default.json({ limit: "500mb" }));
app.use(express_1.default.static("../../frontend/public"));
app.use("/platform", routes_1.default);
module.exports = app.listen(port, () => console.log(`listening on port ${port}!`));
