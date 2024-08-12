import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';

export class locationDataDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    details: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    address: string
}

export class locationIdDto {
    @IsString()
    @MinLength(24)
    @IsNotEmpty()
    @ApiProperty()
    id: string
}
