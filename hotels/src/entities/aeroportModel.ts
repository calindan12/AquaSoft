/* eslint-disable prettier/prettier */
import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'Airports',
  timestamps: false, // Dacă nu ai nevoie de createdAt/updatedAt
})
export class Airport extends Model<Airport> {
  @PrimaryKey
  @AutoIncrement
  @Column
  ID: number;

  @Column({ type: DataType.STRING(10), allowNull: false, unique: true })
  iata_code: string;

  @Column({ type: DataType.STRING(255), allowNull: false })
  airport_name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  CityID: number;

  @Column({ type: DataType.DECIMAL(9, 6), allowNull: false })
  Latitude: number;

  @Column({ type: DataType.DECIMAL(9, 6), allowNull: false })
  Longitude: number;
}
