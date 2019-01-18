import { Entity } from '@loopback/repository';
import { Product } from './product.model';
export declare class Category extends Entity {
    name: string;
    id: number;
    products: Product[];
    parentCategoryId: number;
    constructor(data?: Partial<Category>);
}
