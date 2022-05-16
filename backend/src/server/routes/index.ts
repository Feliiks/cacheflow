import { Router } from "express"
import { prisma } from "../../database"
// const HeadlessChromeScraper = require("../../services/puppeteer");

const mainRouter: Router = Router()

mainRouter.get("/userCompaniesModels/:userUid", async (req, res) => {
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
  const user = await prisma.user.findMany({
    where: {
      cacheflow_id: 1
    }
  })

  res.send(user[0].email)
})

export default mainRouter
