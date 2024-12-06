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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelsController = void 0;
const common_1 = require("@nestjs/common");
const hotels_service_1 = require("./hotels.service");
let HotelsController = class HotelsController {
    constructor(hotelsService) {
        this.hotelsService = hotelsService;
    }
    async findAll() {
        return this.hotelsService.findAll();
    }
    async findOne(id) {
        return this.hotelsService.findOne(id);
    }
    async create(hotelData) {
        return this.hotelsService.create(hotelData);
    }
    async update(id, hotelData) {
        return this.hotelsService.update(id, hotelData);
    }
    async remove(id) {
        return this.hotelsService.remove(id);
    }
};
exports.HotelsController = HotelsController;
__decorate([
    (0, common_1.Get)("/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/getHotel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)("/createHotel"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/updateHotel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/deleteHotel/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HotelsController.prototype, "remove", null);
exports.HotelsController = HotelsController = __decorate([
    (0, common_1.Controller)('hotels'),
    __metadata("design:paramtypes", [hotels_service_1.HotelsService])
], HotelsController);
//# sourceMappingURL=hotels.controller.js.map