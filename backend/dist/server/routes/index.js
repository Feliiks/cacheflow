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
    const query = `
		SELECT
			u.cacheflow_id as user_id,
			c.cacheflow_id as company_id,
			m.cacheflow_id as model_id,
			u.email as user_name,
			c.company_name as company_name,
			c.database_name as company_database_name,
			m.name as model_name,
			m.ui_name as model_ui_name,
			m.upload as upload,
			m.crud as crud,
			um.read as read_permission,
			um.write as write_permission
		
		FROM
			user u

		LEFT JOIN
			user_company uc ON 
			uc.user_uid = u.uid

		LEFT JOIN
			company c ON
			uc.company_cacheflow_id = c.cacheflow_id

		LEFT JOIN
			user_model um ON
			um.user_cacheflow_id = u.cacheflow_id

		LEFT JOIN
			model m ON
			m.cacheflow_id = um.model_cacheflow_id

		WHERE
			u.uid = '${userUid}'
	`;
    // prisma connexion test
    const user = yield database_1.prisma.user.findMany({
        where: {
            cacheflow_id: 1
        }
    });
    res.send(user[0].email);
}));
exports.default = mainRouter;
