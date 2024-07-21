import { Body, Param, Controller, Get, Post, BadRequestException, NotFoundException, Delete, Put } from '@nestjs/common';
import { LocationService } from './location.service';
import { locationDataDto, locationIdDto } from '../../dtos/location.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { locationSwagger } from '../../swagger/location.swagger';

@Controller('location')
@ApiTags('Location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}
    
    @Get()
    @ApiOperation({ summary: `List all locations` })
    @ApiResponse({ status: 200, type: locationSwagger, isArray: true })
    async listAllLocations() {
        const location =  this.locationService.listAllLocations();
        if(!location) throw new BadRequestException('Ops! Something went wrong');
        return location;
    }

    @Post()
    @ApiOperation({ summary: `Create a location` })
    @ApiResponse({ status: 201, type: locationSwagger })
    async createLocation(@Body() body: locationDataDto) {
        const { name, details, address } = body;
        const location = this.locationService.createLocation({ name, details, address });
        if(!location) throw new BadRequestException('Ops! Something went wrong');
        return location;
    }

    @Get(':id')
    @ApiOperation({ summary: `List a locations by it's Id` })
    @ApiResponse({ status: 200, type: locationSwagger })
    async getOneLocation(@Param() params: locationIdDto) {
        const { id } = params;
        const location = await this.locationService.getById(id);
        if(!location) throw new NotFoundException('Could not find location');
        return location;
    }

    @Put(':id')
    @ApiOperation({ summary: `Update a location` })
    @ApiResponse({ status: 201, type: locationSwagger })
    async updateLocation(@Param() params: locationIdDto, @Body() body: locationDataDto) {
        const { id } = params;
        const { name, details, address } = body;
        const location = await this.locationService.updateLocation({ id, name, details, address });
        return location;
    }

    @Delete(':id')
    @ApiOperation({ summary: `Delete a location` })
    @ApiResponse({ status: 203 })
    async deleteLocation(@Param() params: locationIdDto) {
        const { id } = params;
        const response = await this.locationService.deleteLocation(id);
        return response;
    }
}
