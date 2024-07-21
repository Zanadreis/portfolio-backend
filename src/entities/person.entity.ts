import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import { UniversalEntity } from './universal.entity';

@Entity()
export class Person extends UniversalEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
  
  @Column()
  sex: string;

  @Column({ type: 'array', default: [] })
  favoriteLocations: ObjectId[];
}