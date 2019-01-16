import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './services/service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home-view/home.component';
import { HomeEditComponent } from './components/home-edit-add/home-edit.component';


const DECLARATIONS = [
    HomeComponent,
    HomeEditComponent
];

const SERVICES = [
    Service
];

const MODULES = [
    SharedModule,
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
