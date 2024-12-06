/* eslint-disable prettier/prettier */
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'Hotels',
  timestamps: false,
})
export class Hotel extends Model<Hotel> {
  @PrimaryKey
  @AutoIncrement
  @Column
  HotelID: number;

  @Column({ type: DataType.STRING, allowNull: false })
  HotelName: string;

  @Column({ type: DataType.DECIMAL(9, 6), allowNull: false })
  Latitude: number;

  @Column({ type: DataType.DECIMAL(9, 6), allowNull: false })
  Longitude: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  RegionID: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  CityID: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  Address: string;
}
