import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';
import { UniversalEntity } from './universal.entity';

@Entity()
export class Url extends UniversalEntity {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  url: string;

  @Column()
  alias: string;

  @Column({ default: true })
  isActive: boolean;
}