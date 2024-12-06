/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { HotelsService } from './HotelsService';
import { Hotel } from './HotelModel';
import { AuthGuard } from 'src/middleware/authGuard';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get("/all")
  async findAll(): Promise<Hotel[]> {
    return this.hotelsService.findAll();
  }

  @Get('/getById/:id')
  async findOne(@Param('id') id: number): Promise<Hotel> {
    return this.hotelsService.findOne(id);
  }

  @UseGuards(AuthGuard) // Protejează ruta cu JWT Guard
  @Post('/createHotel')
  async create(@Body() hotelData: Partial<Hotel>): Promise<Hotel> {
    return this.hotelsService.create(hotelData);
  }

  @UseGuards(AuthGuard) // Protejează ruta cu JWT Guard
  @Put('/updateHotel/:id')
  async update(@Param('id') id: number, @Body() hotelData: Partial<Hotel>): Promise<Hotel> {
    return this.hotelsService.update(id, hotelData);
  }

  @UseGuards(AuthGuard) // Protejează ruta cu JWT Guard
  @Delete('/deleteHotel/:id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.hotelsService.remove(id);
  }
}
