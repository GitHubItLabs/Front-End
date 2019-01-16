import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { NgbdPaginationBasic } from './pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from './modals/modal.module';


const DECLARATIONS = [
    NgbdPaginationBasic
];

const SERVICES = [

];

const MODULES = [
    LayoutModule,
    NgbModule,
    ModalModule
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
export class SharedModule { }
