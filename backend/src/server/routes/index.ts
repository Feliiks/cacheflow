import { Router } from "express"

import { dbs } from "../../database";
import { User } from "../../database/platform/entity/User";

const mainRouter: Router = Router()

mainRouter.get("/userCompaniesModels/:userUid", async (req, res) => {
  const userUid = req.params.userUid.toString();

  const userRepository = dbs.platform_datasource.getRepository(User)

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

    if (!user[0]) throw new Error

    res.status(200).send(user)
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

export default mainRouter
