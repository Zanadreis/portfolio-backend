import { Test, TestingModule } from '@nestjs/testing';
import { LocationController } from '../../modules/location/location.controller';
import { LocationService } from '../../modules/location/location.service';
import { locationMock, createLocationMock } from '../mocks/location.mock';

describe('LocationController', () => {
  let locationController: LocationController;
  let locationService: LocationService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers: [
        {
          provide: LocationService,
          useValue: {
            listAllLocations: jest.fn().mockResolvedValue([locationMock]),
            createLocation: jest.fn().mockResolvedValue(locationMock),
            getById: jest.fn().mockResolvedValue(locationMock),
            updateLocation: jest.fn().mockResolvedValue(locationMock),
          }
        }
      ], 
    }).compile();

    locationController = module.get<LocationController>(LocationController);
    locationService = module.get<LocationService>(LocationService);
  });

  it('should be defined', () => {
    expect(locationController).toBeDefined();
    expect(locationService).toBeDefined();
  });

  describe('listAllLocations', () => {
    it('should return an array of locations', async () => {
        const result = await locationController.listAllLocations();
        expect(result).toEqual([locationMock]);
    });
  });

  describe('createLocation', () => {
    it('should create a new location', async () => {
        const result = await locationController.createLocation(createLocationMock);
        expect(result).toEqual(locationMock);
    });
  });

  describe('getOneLocation', () => {
    it('should return a location', async () => {
        const id = locationMock._id.toString();
        const result = await locationController.getOneLocation({ id });
        expect(result).toEqual(locationMock);
    });
  });

  describe('updateLocation', () => {
    it('should update a location', async () => {
        const id = locationMock._id.toString();
        const result = await locationController.updateLocation({ id }, createLocationMock);
        expect(result).toEqual(locationMock);
    });
  });

});