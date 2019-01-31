import { NgModule } from '@angular/core';
import { ModalDelteComponent } from './modal-delete/modal-delete.component';
import { ModalViewCategoryComponent } from './modal-view-category/modal-view-category.component';
import { ModalViewProductComponent } from './modal-view-product/modal-view-product.component';

const DECLARATIONS = [
    ModalDelteComponent,
    ModalViewCategoryComponent,
    ModalViewProductComponent

];

const SERVICES = [

];

const MODULES = [
]


@NgModule({
    declarations: [
        ...DECLARATIONS,
        ModalViewProductComponent
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
export class ModalModule { }
