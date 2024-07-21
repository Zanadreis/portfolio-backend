import { NotFoundException, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../../entities/person.entity';
import { Location } from '../../entities/location.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personEntity: Repository<Person>,

        @InjectRepository(Location)
        private readonly locationEntity: Repository<Location>,
    ) {}

    listAllPersons() {
        return this.personEntity.find();
    }

    getById(id): Promise<Person> {
        return this.personEntity.findOneBy({ _id: new ObjectId(id) });
    }

    createPerson(person): Promise<Person> {
        return this.personEntity.save(person);
    }
    
    async addFavoriteLocation({person_id, location_id}): Promise<Person> {
        const person = await this.personEntity.findOneBy({ _id: new ObjectId(person_id) });
        if(!person) throw new NotFoundException('Could not find person');

        const location = await this.locationEntity.findOneBy({ _id: new ObjectId(location_id) });
        if(!location) throw new NotFoundException('Invalid location');

        person.favoriteLocations = person.favoriteLocations || [];
        const favoriteLocationsStr = person.favoriteLocations.map((loc) => loc.toString())
        if(favoriteLocationsStr.includes(location_id)) throw new NotFoundException('Location already favorited');

        person.favoriteLocations.push(new ObjectId(location_id));
        const updPerson = await this.personEntity.save(person);
        return updPerson;
    }

    async removeFavoriteLocation({person_id, location_id}): Promise<Person> {
        const person = await this.personEntity.findOneBy({ _id: new ObjectId(person_id) });
        if(!person) throw new NotFoundException('Could not find person');

        const location = await this.locationEntity.findOneBy({ _id: new ObjectId(location_id) });
        if(!location) throw new NotFoundException('Invalid location');

        person.favoriteLocations = person.favoriteLocations || [];
        const favoriteLocationsStr = person.favoriteLocations.map((loc) => loc.toString())
        if(!favoriteLocationsStr.includes(location_id)) throw new NotFoundException('Location not favorited');

        person.favoriteLocations = person.favoriteLocations.filter((loc) => loc.toString() !== location_id);
        const updPerson = await this.personEntity.save(person);
        return updPerson;
    }
}
