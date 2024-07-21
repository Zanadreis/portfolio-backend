import { Body, Controller, Get, Param, Post, NotFoundException, BadRequestException, Res } from '@nestjs/common';
import { Response } from 'express';
import { UrlService } from './url.service';
import { translateAliasDto, createAliasDto } from '../../dtos/url.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { urlSwagger } from '../../swagger/url.swagger';

@Controller('shortener')
@ApiTags('URL Shortener')
export class UrlController {
    constructor(private readonly urlService: UrlService) {}

    @Post()
    @ApiOperation({ summary: 'Create a shortened URL (alias) for a given URL' })
    @ApiResponse({ status: 201, type: urlSwagger})
    async createAlias(@Body() body: createAliasDto) {
        const { url } = body;
        const alias = this.urlService.createAlias(url);
        if(!alias) throw new BadRequestException('Ops! Something went wrong');
        return alias;
    }

    @Get('/:alias')
    @ApiOperation({ summary: `Redirect to an URL based on an it's shortened alias` })
    async redirectToUrl(@Param() params: translateAliasDto, @Res() res: Response) {
        const { alias } = params ;
        const url = await this.urlService.translateAlias(alias);
        if(!url) throw new NotFoundException('Could not translate alias');
        res.redirect(`${url.url}`);
    }
}
