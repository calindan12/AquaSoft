/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Obține instanța JwtService pentru generarea token-ului
  const jwtService = app.get(JwtService);

  // Payload-ul token-ului (datele incluse în token)
  const payload = {
    username: 'testuser',
    role: 'admin',
  };

  // Generarea token-ului
  const token = jwtService.sign(payload, {
    secret: 'SECRET_KEY', // Cheia secretă pentru JWT
    expiresIn: '1h', // Valabilitatea token-ului
  });

  // Afișează token-ul generat în consolă
  console.log('Token generat automat:');
  console.log(token);

  // Rulează aplicația pe portul specificat
  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}
bootstrap();
