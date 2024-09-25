import { Controller, Get, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlModule } from './modules/url/url.module';
import { HealthModule } from './modules/health/health.module';
import { LocationModule } from './modules/location/location.module';
import { PersonModule } from './modules/person/person.module';
import { ApiExcludeController } from '@nestjs/swagger';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    HealthModule,
    UrlModule,
    LocationModule,
    PersonModule
  ],
  controllers: [],
  providers: [],
})

@ApiExcludeController()
@Controller()
class AppController {
  @Get()
  root() {
    return 'API made by Zanadreis. See /docs for more information.';
  }
}
export class AppModule {}
