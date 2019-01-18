import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './services/service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { CategoryEditComponent } from './components/category-edit-add/category-edit.component';


const DECLARATIONS = [
    CategoryViewComponent,
    CategoryEditComponent
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
export class CategoryModule { }
