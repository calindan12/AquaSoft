/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Obține instanța JwtService pentru generarea token-ului
  const jwtService = app.get(JwtService);

  const payload = {
    username: 'testuser',
    role: 'admin',
  };

  // Generarea token-ului
  const token = jwtService.sign(payload, {
    secret: 'SECRET_KEY', 
    expiresIn: '1h',
  });

  console.log('Token generat automat:');
  console.log(token);

  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}
bootstrap();
