import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryViewComponent } from './category/components/category-view/category-view.component';
import { CategoryEditComponent } from './category/components/category-edit-add/category-edit.component';

const routes: Routes = [
  { path: '', component: CategoryViewComponent },
  {
    path: 'category',
    canActivate: [],
    children: [
      { path: '', component: CategoryViewComponent },
      { path: ':mode', component: CategoryEditComponent },
      { path: ':mode/:id', component: CategoryEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
