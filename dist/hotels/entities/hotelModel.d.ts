import { Model } from 'sequelize-typescript';
export declare class Hotel extends Model<Hotel> {
    HotelID: number;
    HotelName: string;
    Latitude: number;
    Longitude: number;
    RegionID: number;
    CityID: number;
    Address: string;
}
