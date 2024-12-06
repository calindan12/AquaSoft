/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DBService implements OnModuleInit {
  constructor(private readonly sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      console.log('Conexiunea la baza de date a fost realizată cu succes.');
    } catch (error) {
      console.error('Eroare la conectarea la baza de date:', error);
    }
  }
}
