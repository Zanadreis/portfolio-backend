import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../../entities/person.entity';
import { Location } from '../../entities/location.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person]),
    TypeOrmModule.forFeature([Location])
  ],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}