import { Entity, model, property, belongsTo, hasMany } from '@loopback/repository';
import { Product } from './product.model';

@model()
export class Category extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @hasMany(() => Product)
  products: Product[];

  @property({ type: 'number' })
  parentCategoryId: number;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}
