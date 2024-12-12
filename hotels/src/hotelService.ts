/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Hotel } from './entities/hotelModel';
// import { Airport } from './entities/aeroportModel';
import { Airport } from './entities/aeroportModel';
import { Sequelize,QueryTypes  } from 'sequelize';


@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel)
    private readonly hotelModel: typeof Hotel,
    // private readonly airportModel: typeof Airport
    @InjectModel(Airport)
    private readonly airportModel: typeof Airport // Injectarea corectă
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


  async getClosestHotels(airportId: any): Promise<any> {
    const airport = await this.airportModel.findByPk(airportId, {
      attributes: ['Latitude', 'Longitude'],
    });
  
    if (!airport) {
      throw new Error('Airport not found');
    }
  
    const Latitude = airport.get('Latitude');
    const Longitude = airport.get('Longitude');  


    const query = `
    SELECT 
        h.HotelID AS hotel_id,
        h.HotelName AS hotel_name,
        h.Latitude,
        h.Longitude,
        MIN(p.StandardRoom) AS best_standardRoom,
        MIN(p.DeluxeRoom) AS best_deluxeRoom,
        MIN(p.FamilyPackage) AS best_familyPackage,
        MIN(p.AllInclusive) AS best_allInclusive,
        MIN(p.Studio) AS best_studio,
        (6371 * ACOS(
            COS(RADIANS(:Latitude)) * COS(RADIANS(h.Latitude)) *
            COS(RADIANS(h.Longitude) - RADIANS(:Longitude)) +
            SIN(RADIANS(:Latitude)) * SIN(RADIANS(h.Latitude))
        )) AS distance
    FROM Hotels h
    LEFT JOIN HotelPriceOffers hpo ON h.HotelID = hpo.HotelID
    LEFT JOIN PriceOffers p ON hpo.PriceOfferID = p.ID
    GROUP BY h.HotelID, h.HotelName, h.Latitude, h.Longitude
    HAVING distance <= 600
    ORDER BY distance ASC;
  `;


    console.log("latitudine: " , Latitude , "longitudine: " , Longitude)

    let hotels = await this.hotelModel.sequelize.query(query, {
      replacements: { Latitude, Longitude },
      type: QueryTypes.SELECT,
    });

    if (!Array.isArray(hotels)) {
      console.error('Datele returnate nu sunt un array:', hotels);
      hotels = [hotels];
    }

    console.log(`Numărul de hoteluri găsite: ${hotels.length}`);
    hotels.forEach((hotel, index) => {
      console.log(`Hotel ${index + 1}:`, hotel);
    });

    console.log("hotele: " , hotels)

    console.log("hotele gasite: " , Object.keys(hotels).length)
    if(hotels.length != 0){
      return hotels;
    }else {
        return { message: 'Nu s-au găsit hoteluri în apropierea aeroportului specificat.' };
      }
    }
}
