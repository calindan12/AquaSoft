/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hotel} from './hotels/HotelModel.js';
import { DBService } from './DBService.js';
import { HotelsController } from './hotels/HotelsController.js';
import { HotelsService } from './hotels/HotelsService.js';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Hotel]),
    JwtModule.register({
      secret: 'SECRET_KEY', // Cheia secretă pentru JWT
      signOptions: { expiresIn: '1h' }, // Valabilitatea token-ului
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql', // Tipul bazei de date
      host: 'localhost', // Gazda bazei de date
      port: 3306, // Portul bazei de date
      username: 'root', // Utilizatorul bazei de date
      password: 'Federer1', // Parola bazei de date
      database: 'hotels', // Numele bazei de date
      autoLoadModels: true, // Încarcă automat modelele înregistrate
      synchronize: true, // Sincronizează automat schema bazei de date (doar pentru dezvoltare)
    }),
    // Hotel, // Modulul specific pentru gestionarea hotelurilor
  ],
  controllers:[HotelsController],
  providers: [DBService,HotelsService],

})
export class AppModule {}
