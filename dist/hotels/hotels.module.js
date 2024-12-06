"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelsModule = void 0;
const common_1 = require("@nestjs/common");
const hotels_service_1 = require("./hotels.service");
const hotels_controller_1 = require("./hotels.controller");
const sequelize_1 = require("@nestjs/sequelize");
const hotelModel_1 = require("./entities/hotelModel");
const jwt_1 = require("@nestjs/jwt");
const middleware_1 = require("../middleware/middleware");
let HotelsModule = class HotelsModule {
    configure(consumer) {
        consumer
            .apply(middleware_1.AuthMiddleware)
            .forRoutes({ path: 'hotels/updateHotel/:id', method: common_1.RequestMethod.PUT }, { path: 'hotels/deleteHotel/:id', method: common_1.RequestMethod.DELETE }, { path: 'hotels/createHotel', method: common_1.RequestMethod.POST });
    }
};
exports.HotelsModule = HotelsModule;
exports.HotelsModule = HotelsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([hotelModel_1.Hotel]),
            jwt_1.JwtModule.register({
                secret: 'SECRET_KEY',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        providers: [hotels_service_1.HotelsService],
        controllers: [hotels_controller_1.HotelsController]
    })
], HotelsModule);
//# sourceMappingURL=hotels.module.js.map