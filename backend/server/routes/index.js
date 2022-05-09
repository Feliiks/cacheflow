const router = require("express").Router();
const db = require("../../database/index.js");
// const HeadlessChromeScraper = require("../../services/puppeteer");

router.route("/userCompaniesModels/:userUid").get(async (req, res) => {
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

  db.query(query, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
