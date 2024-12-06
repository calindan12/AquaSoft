import { HotelsService } from './hotels.service';
import { Hotel } from './entities/hotelModel.js';
export declare class HotelsController {
    private readonly hotelsService;
    constructor(hotelsService: HotelsService);
    findAll(): Promise<Hotel[]>;
    findOne(id: number): Promise<Hotel>;
    create(hotelData: Partial<Hotel>): Promise<Hotel>;
    update(id: number, hotelData: Partial<Hotel>): Promise<Hotel>;
    remove(id: number): Promise<void>;
}
