/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // // Generarea unui token JWT automat la pornirea aplicației
  const jwtService = app.get(JwtService);

  const payload = {
    username: 'testuser',
    role: 'admin',
  };

  const token = jwtService.sign(payload, {
    secret: 'SECRET_KEY', // Înlocuiește cu cheia secretă corectă
    expiresIn: '1h', // Tokenul expiră într-o oră
  });

  console.log('Token generat automat:');
  console.log(token);

  // Setează portul pe care rulează aplicația
  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}
bootstrap();
