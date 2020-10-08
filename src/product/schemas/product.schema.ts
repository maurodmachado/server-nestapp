import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({default: Date.now})
  createAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

