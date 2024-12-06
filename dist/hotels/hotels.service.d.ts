import { Hotel } from './entities/hotelModel.js';
export declare class HotelsService {
    private readonly hotelModel;
    constructor(hotelModel: typeof Hotel);
    findAll(): Promise<Hotel[]>;
    findOne(id: number): Promise<Hotel>;
    create(hotelData: Partial<Hotel>): Promise<Hotel>;
    update(id: number, hotelData: Partial<Hotel>): Promise<Hotel>;
    remove(id: number): Promise<void>;
}
