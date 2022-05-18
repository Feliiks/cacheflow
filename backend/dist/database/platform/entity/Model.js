"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const typeorm_1 = require("typeorm");
const Company_1 = require("./Company");
const User_model_1 = require("./User_model");
let Model = class Model {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Model.prototype, "cacheflow_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true }),
    __metadata("design:type", String)
], Model.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, unique: true }),
    __metadata("design:type", String)
], Model.prototype, "ui_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Model.prototype, "upload", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Model.prototype, "crud", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Model.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Model.prototype, "write", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", unique: true }),
    __metadata("design:type", String)
], Model.prototype, "cacheflow_created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], Model.prototype, "cacheflow_updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => Company_1.Company, Company => Company.model),
    (0, typeorm_1.JoinColumn)({ name: "company_cacheflow_id" }),
    __metadata("design:type", Company_1.Company)
], Model.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => User_model_1.User_model, User_model => User_model.model),
    __metadata("design:type", Array)
], Model.prototype, "user_model", void 0);
Model = __decorate([
    (0, typeorm_1.Entity)()
], Model);
exports.Model = Model;
