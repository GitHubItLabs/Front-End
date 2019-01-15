import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { Service } from './services/service';
import { ModalModule } from '../modal/modal.module';
import { HomeEditComponent } from './home-edit/home-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const DECLARATIONS = [
    HomeComponent,
    HomeEditComponent
];

const SERVICES = [
    Service
];

const MODULES = [
    LayoutModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
export class HomeModule { }
