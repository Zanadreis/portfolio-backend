import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from '../../modules/person/person.controller';
import { PersonService } from '../../modules/person/person.service';

describe('PersonController', () => {
  let personController: PersonController;
  let personService: PersonService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [
        {
          provide: PersonService,
          useValue: {
            listAllPersons: jest.fn().mockResolvedValue([personMock]),
            createPerson: jest.fn().mockResolvedValue(personMock),
            getById: jest.fn().mockResolvedValue(personMock),
            updatePerson: jest.fn().mockResolvedValue(personMock),
          }
        }
      ], 
    }).compile();

    personController = module.get<PersonController>(PersonController);
    personService = module.get<PersonService>(PersonService);
  });

  it('should be defined', () => {
    expect(personController).toBeDefined();
    expect(personService).toBeDefined();
  });

  describe('listAllPersons', () => {
    it('should return an array of persons', async () => {
        const result = await personController.listAllPersons();
        expect(result).toEqual([personMock]);
    });
  });

  describe('createPerson', () => {
    it('should create a new person', async () => {
        const result = await personController.createPerson(createPersonMock);
        expect(result).toEqual(personMock);
    });
  });

  describe('getOnePerson', () => {
    it('should return a person', async () => {
        const id = personMock._id.toString();
        const result = await personController.getOnePerson({ id });
        expect(result).toEqual(personMock);
    });
  });

  describe('updatePerson', () => {
    it('should update a person', async () => {
        const id = personMock._id.toString();
        const result = await personController.updatePerson({ id }, createPersonMock);
        expect(result).toEqual(personMock);
    });
  });

});