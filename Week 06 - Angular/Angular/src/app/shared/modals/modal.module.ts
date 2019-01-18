import { NgModule } from '@angular/core';
import { ModalDelteComponent } from './modal-delete/modal-delete.component';
import { ModalViewComponent } from './modal-view/modal-view.component';

const DECLARATIONS = [
    ModalDelteComponent,
    ModalViewComponent

];

const SERVICES = [

];

const MODULES = [
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
export class ModalModule { }
