import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength, IsIn } from 'class-validator';

export class createPersonDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    lastName: string

    @IsNumber()
    @ApiPropertyOptional()
    age: number
    
    @IsString()
    @IsIn(['male', 'female'], {
        message: 'sex must be either "male" or "female".',
    })
    @ApiPropertyOptional()
    sex: string;
}

export class getOnePersonDto {
    @IsString()
    @MinLength(24)
    @IsNotEmpty()
    @ApiProperty()
    id: string
}

export class addFavoriteLocationDto {
    @IsString()
    @MinLength(24)
    @IsNotEmpty()
    @ApiProperty()
    person_id: string

    @IsString()
    @MinLength(24)
    @IsNotEmpty()
    @ApiProperty()
    location_id: string
}
