import express from "express"
const port = 3000;
import cors from "cors"
import mainRouter from "./routes";

const app = express();

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
