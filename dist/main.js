"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const jwt_1 = require("@nestjs/jwt");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const jwtService = app.get(jwt_1.JwtService);
    const payload = {
        username: 'testuser',
        role: 'admin',
    };
    const token = jwtService.sign(payload, {
        secret: 'SECRET_KEY',
        expiresIn: '1h',
    });
    console.log('Token generat automat:', token);
    await app.listen(3000);
    console.log('Server running on http://localhost:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map