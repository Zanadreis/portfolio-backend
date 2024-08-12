import { Body, Param, Controller, Get, Post, Put, BadRequestException, NotFoundException } from '@nestjs/common';
import { PersonService } from './person.service';
import { createPersonDto, getOnePersonDto, editPersonDto, addFavoriteLocationDto } from '../../dtos/person.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { personSwagger } from '../../swagger/person.swagger';

@Controller('person')
@ApiTags('Person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}
    @Get()
    @ApiOperation({ summary: `Lists all persons` })
    @ApiResponse({ status: 200, type: personSwagger, isArray: true})
    async listAllPersons() {
        const person =  this.personService.listAllPersons();
        if(!person) throw new BadRequestException('Ops! Something went wrong');
        return person;
    }

    @Post()
    @ApiOperation({ summary: `Create a new person` })
    @ApiResponse({ status: 201, type: personSwagger})
    async createPerson(@Body() body: createPersonDto) {
        const { name, lastName, age, sex } = body;
        const person = this.personService.createPerson({ name, lastName, age, sex });
        if(!person) throw new BadRequestException('Ops! Something went wrong');
        return person;
    }

    @Get(':id')
    @ApiOperation({ summary: `List a persons by it's Id` })
    @ApiResponse({ status: 200, type: personSwagger})
    async getOnePerson(@Param() params: getOnePersonDto) {
        const { id } = params;
        const person = await this.personService.getById(id);
        if(!person) throw new NotFoundException('Could not find person');
        return person;
    }

    @Put(':id')
    @ApiOperation({ summary: `Update a person` })
    @ApiResponse({ status: 201, type: personSwagger })
    async updateLocation(@Param() params: getOnePersonDto, @Body() body: editPersonDto) {
        const { id } = params;
        const {name, lastName, age, sex} = body;
        const person = await this.personService.updatePerson({id, name, lastName, age, sex});
        return person;
    }

    @Post(':person_id/favorite/:location_id')
    @ApiOperation({ summary: `Favorite a location for a person` })
    @ApiResponse({ status: 201, type: personSwagger})
    async addFavoriteLocation(@Param() params: addFavoriteLocationDto) {
        const { person_id, location_id } = params;
        const person = await this.personService.addFavoriteLocation({person_id, location_id});
        if(!person) throw new NotFoundException('Ops! Something went wrong');
        return person;
    }

    @Post(':person_id/unfavorite/:location_id')
    @ApiOperation({ summary: `Unfavorite a location for a person` })
    @ApiResponse({ status: 201, type: personSwagger})
    async removeFavoriteLocation(@Param() params: addFavoriteLocationDto) {
        const { person_id, location_id } = params;
        const person = await this.personService.removeFavoriteLocation({person_id, location_id});
        if(!person) throw new NotFoundException('Ops! Something went wrong');
        return person;
    }
}
