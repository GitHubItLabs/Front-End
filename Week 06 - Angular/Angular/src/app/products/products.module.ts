import { NgModule } from '@angular/core';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditAddComponent } from './product-edit-add/product-edit-add.component';
import { CategoryModule } from '../category/category.module';
import { ProductService } from './services/product-service';


const DECLARATIONS = [
    ProductViewComponent,
    ProductEditAddComponent
];

const SERVICES = [
    ProductService
];

const MODULES = [
    CategoryModule
]


@NgModule({
    declarations: [
        ...DECLARATIONS
    ],
    imports: [
        ...MODULES
    ],
    exports: [
        ...DECLARATIONS,
        ...MODULES
    ],
    providers: [
        ...SERVICES
    ]
})
export class ProductsModule { }
