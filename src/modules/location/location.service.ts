import { NotFoundException, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from '../../entities/location.entity';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location)
        private readonly locationEntity: Repository<Location>
    ) {}

    listAllLocations() {
        return this.locationEntity.find();
    }

    getById(id): Promise<Location> {
        return this.locationEntity.findOneBy({ _id: new ObjectId(id) });
    }

    async updateLocation({id, name, details, address}): Promise<Location> {
        const location = await this.locationEntity.findOneBy({ _id: new ObjectId(id) });
        if(!location) throw new NotFoundException('Could not find location');
        
        location.name = name || location.name;
        location.details = details || location.details;
        location.address = address || location.address;

        return this.locationEntity.save(location);
    }

    async deleteLocation(id): Promise<Location> {
        const location = await this.locationEntity.findOneBy({ _id: new ObjectId(id) });
        if(!location) throw new NotFoundException('Could not find location');
        return this.locationEntity.remove(location);
    }

    createLocation(location): Promise<Location> {
        return this.locationEntity.save(location);
    }
}
