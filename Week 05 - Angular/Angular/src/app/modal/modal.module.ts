import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';


const DECLARATIONS = [
    ModalComponent
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
