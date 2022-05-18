import express from "express"
import "reflect-metadata"
import {platform_datasource, company_ddb_datasource} from "../database/db";
const port = 3000;
import cors from "cors"
import mainRouter from "./routes";

const app = express();

(async function () {
  try {
    await platform_datasource.initialize()
    await company_ddb_datasource.initialize()

    console.log("Database connection successfull.")
  } catch (err) {
    console.log(err)
  }
}());

app.use(cors());
app.use(
  express.urlencoded({ limit: "500mb", extended: true, parameterLimit: 50000 })
);
app.use(express.json({ limit: "500mb" }));
app.use(express.static("../../frontend/public"));

app.use("/platform", mainRouter);

module.exports = app.listen(port, () =>
  console.log(`listening on port ${port}!`)
);
