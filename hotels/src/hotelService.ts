/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hotel } from './entities/hotelModel';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel)
    private readonly hotelModel: typeof Hotel,
  ) {}

  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.findAll();
  }

  async findOne(id: number): Promise<Hotel> {
    return this.hotelModel.findByPk(id);
  }

  async create(hotelData: Partial<Hotel>): Promise<Hotel> {
    return this.hotelModel.create(hotelData);
  }

  async update(id: number, hotelData: Partial<Hotel>): Promise<Hotel> {
    const hotel = await this.findOne(id);
    return hotel.update(hotelData);
  }

  async remove(id: number): Promise<void> {
    const hotel = await this.findOne(id);
    await hotel.destroy();
  }
}
