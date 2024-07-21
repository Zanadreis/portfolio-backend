import { ObjectId } from "mongodb";
import { Location } from "../../entities/location.entity";
import { locationDataDto } from "src/dtos/location.dto";

export const locationMock: Location = {
    name: 'name',
    details: 'details',
    address: 'address',

    _id: new ObjectId(),
    created_at: new Date(),
    updated_at: new Date(),
    isActive: true,
    setDefaults() {
        this._id = new ObjectId();
        this.created_at = new Date();
        this.updated_at = new Date();
    },
    updateTimestamp() {
        this.updated_at = new Date();
    }
}

export const createLocationMock: locationDataDto = {
    name: 'name',
    details: 'details',
    address: 'address'
}
