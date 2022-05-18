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
exports.User_model = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Model_1 = require("./Model");
let User_model = class User_model {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], User_model.prototype, "cacheflow_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Model_1.Model, Model => Model.user_model),
    (0, typeorm_1.JoinColumn)({ name: "model_cacheflow_id" }),
    __metadata("design:type", Model_1.Model)
], User_model.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => User_1.User, User => User.user_model),
    (0, typeorm_1.JoinColumn)({ name: "user_cacheflow_id" }),
    __metadata("design:type", User_1.User)
], User_model.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], User_model.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], User_model.prototype, "write", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], User_model.prototype, "cacheflow_created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], User_model.prototype, "cacheflow_updated_at", void 0);
User_model = __decorate([
    (0, typeorm_1.Entity)()
], User_model);
exports.User_model = User_model;
