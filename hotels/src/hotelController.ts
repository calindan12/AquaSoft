/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Query} from '@nestjs/common';
import { HotelsService } from './hotelService';
import { Hotel } from './entities/hotelModel';
import { AuthGuard } from './middleware/AuthGuard';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get('/all')
  async findAll(): Promise<Hotel[]> {
    return this.hotelsService.findAll();
  }

  @Get('/getHotel/:id')
  async findOne(@Param('id') id: number): Promise<Hotel> {
    return this.hotelsService.findOne(id);
  }

  @Get('closest-hotels')
  async getClosestHotels(@Query('airportId') airportId: number) {
    return await this.hotelsService.getClosestHotels(airportId);
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
