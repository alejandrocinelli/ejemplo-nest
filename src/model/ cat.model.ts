import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Cat } from '../interface/cat/cat.interface';

@Schema()
export class CatModel extends Document implements Cat {
  @Prop()
  readonly name: string;

  @Prop()
  readonly age: number;

  @Prop()
  readonly breed: string;
}

export const CatSchema = SchemaFactory.createForClass(CatModel);
