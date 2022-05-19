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
const db_1 = require("../../database/db");
const User_1 = require("../../database/platform/entity/User");
const mainRouter = (0, express_1.Router)();
mainRouter.get("/userCompaniesModels/:userUid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUid = req.params.userUid.toString();
    const userRepository = db_1.dbs.platform_datasource.getRepository(User_1.User);
    try {
        let user = yield userRepository.find({
            where: {
                uid: userUid
            },
            relations: {
                user_company: true,
                user_model: true
            }
        });
        if (!user[0])
            throw new Error;
        res.status(200).send(user);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
exports.default = mainRouter;
