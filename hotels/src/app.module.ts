/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { HotelsController } from './hotelController';
import { HotelsService } from './hotelService';
import { Hotel } from './entities/hotelModel';
import { AuthGuard } from './middleware/AuthGuard';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Federer1',
      database: 'hotels',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Hotel]),
    JwtModule.register({
      secret: 'SECRET_KEY', // Secretul pentru JWT
      signOptions: { expiresIn: '1h' }, // Durata de valabilitate a token-ului
    }),
  ],
  controllers: [HotelsController],
  providers: [HotelsService, AuthGuard],
})
export class AppModule {}
