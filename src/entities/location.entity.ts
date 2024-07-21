import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import { UniversalEntity } from './universal.entity';

@Entity({ name: 'location' })
export class Location extends UniversalEntity{
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  details: string;

  @Column()
  address: string;

}