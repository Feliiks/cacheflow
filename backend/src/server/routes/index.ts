import { Router } from "express"
import { prisma } from "../../database"

const mainRouter: Router = Router()

mainRouter.get("/userCompaniesModels/:userUid", async (req, res) => {
  const userUid = req.params.userUid.toString();

  try {
    const user = await prisma.user.findUnique({
      where: {
        uid: userUid
      },
      include: {
        user_company: true,
        user_model: true
      }
    })

    const company = await prisma.company.findFirst({
      where: {
        cacheflow_id: user!.user_company[0].cacheflow_id
      }
    })

    const model = await prisma.model.findFirst({
      where: {
        cacheflow_id: user!.user_model[0].cacheflow_id
      }
    })

    let result = {
      user_id: user!.cacheflow_id,
      company_id: company!.cacheflow_id,
      model_id: model!.cacheflow_id,
      user_name: user!.email,
      company_name: company!.company_name,
      company_database_name: company!.database_name,
      model_name: model!.name,
      model_ui_name:  model!.ui_name,
      upload:  model!.upload,
      crud:  model!.crud,
      read_permission:  model!.read,
      write_permission:  model!.write
    }

    res
        .send(result)
        .status(200)

  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

export default mainRouter
