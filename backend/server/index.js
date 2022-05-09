const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.use(
  express.urlencoded({ limit: "500mb", extended: true, parameterLimit: 50000 })
);
app.use(express.json({ limit: "500mb" }));
app.use(express.static("../frontend/public"));

app.use("/platform", router);

module.exports = app.listen(port, () =>
  console.log(`listening on port ${port}!`)
);
