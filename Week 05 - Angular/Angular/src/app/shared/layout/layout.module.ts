import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageComponent } from './page/page.component';
import { HeadingComponent } from './heading/heading.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const DECLARATIONS = [
    SidebarComponent,
    PageComponent,
    HeadingComponent,
    HeaderComponent
];

const SERVICES = [

];

const MODULES = [
    CommonModule,
    RouterModule,
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
export class LayoutModule { }
