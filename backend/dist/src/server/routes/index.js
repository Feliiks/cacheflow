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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const User_1 = require("../../database/platform/entity/User");
const mainRouter = (0, express_1.Router)();
mainRouter.get("/userCompaniesModels/:userUid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUid = req.params.userUid.toString();
    // @ts-ignore
    let datasource = new typeorm_1.DataSource({
        type: "mysql",
        host: "cacheflow-db-cluster-dev.cluster-c37w0dj5gpef.us-east-1.rds.amazonaws.com",
        port: 3306,
        username: "clusteradmin",
        password: "O0zf8.1a3AU.wWOWpE_wfp5TowtJ=Y",
        database: "platform",
        synchronize: true,
        logging: false,
        entities: [
            "../../database/platform/entity/**/*.ts"
        ]
    });
    yield datasource.initialize();
    try {
        let user = yield datasource
            .getRepository(User_1.User)
            .createQueryBuilder("user")
            .where("user.uid = :uid", { uid: "KXyKCbZKIvhju1lUFwYOTUveLR62" })
            .getOne();
        console.log(user);
        res.send(user);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
exports.default = mainRouter;
