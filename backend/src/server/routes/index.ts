import { Router } from "express"

import { platform_datasource, company_ddb_datasource } from "../../database/db";
import { User } from "../../database/platform/entity/User";

const mainRouter: Router = Router()

mainRouter.get("/userCompaniesModels/:userUid", async (req, res) => {
  const userUid = req.params.userUid.toString();

  const userRepository = platform_datasource.getRepository(User)

  try {
    let user = await userRepository.find({
      where: {
        uid: userUid
      },
      relations: {
        user_company: true,
        user_model: true
      }
    })

    res.send(user)
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

export default mainRouter
