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
const database_1 = require("../../database");
// const HeadlessChromeScraper = require("../../services/puppeteer");
const mainRouter = (0, express_1.Router)();
mainRouter.get("/userCompaniesModels/:userUid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userUid = req.params.userUid.toString();
    try {
        const user = yield database_1.prisma.user.findUnique({
            where: {
                uid: userUid
            },
            include: {
                user_company: true,
                user_model: true
            }
        });
        const company = yield database_1.prisma.company.findFirst({
            where: {
                cacheflow_id: user.user_company[0].cacheflow_id
            }
        });
        const model = yield database_1.prisma.model.findFirst({
            where: {
                cacheflow_id: user.user_model[0].cacheflow_id
            }
        });
        let result = {
            user_id: user.cacheflow_id,
            company_id: company.cacheflow_id,
            model_id: model.cacheflow_id,
            user_name: user.email,
            company_name: company.company_name,
            company_database_name: company.database_name,
            model_name: model.name,
            model_ui_name: model.ui_name,
            upload: model.upload,
            crud: model.crud,
            read_permission: model.read,
            write_permission: model.write
        };
        res
            .send(result)
            .status(200);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}));
exports.default = mainRouter;
