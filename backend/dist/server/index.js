"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ limit: "500mb", extended: true, parameterLimit: 50000 }));
app.use(express_1.default.json({ limit: "500mb" }));
app.use(express_1.default.static("../../frontend/public"));
app.use("/platform", routes_1.default);
module.exports = app.listen(port, () => console.log(`listening on port ${port}!`));
