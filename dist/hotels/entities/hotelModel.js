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
exports.Hotel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Hotel = class Hotel extends sequelize_typescript_1.Model {
};
exports.Hotel = Hotel;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Hotel.prototype, "HotelID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Hotel.prototype, "HotelName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(9, 6),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Hotel.prototype, "Latitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DECIMAL(9, 6),
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Hotel.prototype, "Longitude", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Hotel.prototype, "RegionID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Hotel.prototype, "CityID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Hotel.prototype, "Address", void 0);
exports.Hotel = Hotel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'hotels',
        timestamps: false,
    })
], Hotel);
//# sourceMappingURL=hotelModel.js.map