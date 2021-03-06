import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Characteristics {
  lifespan: string;
  size: 'small' | 'medium' | 'large';
  coat: 'short' | 'medium' | 'long';
  color: string;
}

// @Schema()
@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class Cat {
  @Prop()
  breed: string;

  @Prop()
  characteristics: Characteristics;

  @Prop({ default: Date.now })
  created!: Date;

  @Prop({ default: Date.now })
  updated!: Date;
}

export type CatDocument = Cat & Document;
export const CatSchema = SchemaFactory.createForClass(Cat);
