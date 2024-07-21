// Inside a folder because it can be divided in multiple files and inside the folder may be several customized decorators for class-validator
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, Matches } from 'class-validator';

export class createAliasDto {
    @IsUrl()
    @IsNotEmpty() 
    @Matches(/^(http:\/\/|https:\/\/)/, {
        message: 'url must start with either "https://" or "http://".',
    })
    @ApiProperty()
    url: string
}

export class translateAliasDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    alias: string
}
