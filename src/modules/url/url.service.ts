import { ConflictException, Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from '../../entities/url.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UrlService {
    constructor(
        @InjectRepository(Url) 
        private readonly urlEntity: Repository<Url>,
        private readonly configService: ConfigService,
    ) {}
    baseUrl = this.configService.get('BASE_URL') || 'http://localhost:3000';

    async createAlias(url): Promise<string> {
        const urlExists = await this.urlExists(url);
        if (urlExists) throw new ConflictException(`URL already registred with alias ${urlExists.alias}`);
        const alias = randomBytes(6).toString('base64url');
        this.urlEntity.save({ url, alias, isActive: true });
        return `${this.baseUrl}/shortener/${alias}`;
    }

    async translateAlias(alias): Promise<Url> {
        return this.urlEntity.findOne({ where: { alias } });
    }

    async urlExists(url): Promise<Url> {
        return this.urlEntity.findOne({ where: { url } });
    }

}
